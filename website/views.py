from decimal import Decimal

import stripe
from django.conf import settings
from django.core.mail import send_mail
from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET, require_POST

from .calculator import calculate_pricing
from .forms import CheckoutForm, WRISTBAND_CHOICES
from .models import CheckoutRequest, NewsletterSignup, StripeWebhookEvent

stripe.api_key = settings.STRIPE_SECRET_KEY


def home(request):
    context = {
        "stripe_publishable_key": settings.STRIPE_PUBLISHABLE_KEY,
        "wristband_choices": WRISTBAND_CHOICES,
    }
    return render(request, "website/home.html", context)


@require_GET
def calculate_api(request):
    try:
        guests = int(request.GET.get("guests", "0"))
        shows = int(request.GET.get("shows", "1"))
    except ValueError:
        return JsonResponse({"error": "Invalid guests/shows values."}, status=400)

    white_label = request.GET.get("white_label") == "true"
    custom_skin = request.GET.get("custom_skin") == "true"
    delivery_to_venue = request.GET.get("delivery_to_venue") == "true"
    experience = (request.GET.get("experience") or "pro").strip()
    event_timing = (request.GET.get("event_timing") or "30").strip()

    if guests < 1 or shows < 1:
        return JsonResponse({"error": "Guests and shows must be greater than 0."}, status=400)

    result = calculate_pricing(
        guests=guests,
        shows=shows,
        white_label=white_label,
        custom_skin=custom_skin,
        delivery_to_venue=delivery_to_venue,
        experience=experience,
        event_timing=event_timing,
    )
    return JsonResponse(result)


@require_POST
def newsletter_subscribe(request):
    # Accept normal form POSTs or fetch() form submissions
    email = (request.POST.get("email") or "").strip().lower()
    if not email:
        return JsonResponse({"ok": False, "error": "Email is required."}, status=400)

    signup, created = NewsletterSignup.objects.get_or_create(email=email)

    to_email = (getattr(settings, "NOTIFY_NEWSLETTER_TO_EMAIL", "") or "").strip()
    if to_email:
        subject = "New newsletter signup"
        message = f"Email: {signup.email}\nCreated: {signup.created_at}\nNew: {created}"
        try:
            send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [to_email], fail_silently=True)
        except Exception:
            # Never block the user flow if SMTP fails
            pass

    return JsonResponse({"ok": True, "created": created})


@require_POST
def create_checkout_session(request):
    form = CheckoutForm(request.POST, request.FILES)
    if not form.is_valid():
        return JsonResponse({"error": form.errors}, status=400)

    cd = form.cleaned_data
    event_name = (cd.get("event_name") or "").strip() or "Untitled Event"
    event_date = cd.get("event_date")
    experience = cd.get("experience") or "pro"
    event_timing = cd.get("event_timing") or "30"
    pricing = calculate_pricing(
        guests=cd["guests"],
        shows=cd["shows"],
        white_label=cd.get("white_label", False),
        custom_skin=cd.get("custom_skin", False),
        delivery_to_venue=cd.get("delivery_to_venue", False),
        experience=experience,
        event_timing=event_timing,
    )

    checkout_request = CheckoutRequest.objects.create(
        event_name=event_name,
        event_date=event_date,
        guests=cd["guests"],
        shows=cd["shows"],
        wristband_type=cd["wristband_type"],
        upload_design=cd.get("upload_design"),
        transport_per_band=pricing["transport_per_band"],
        wristbands_needed=pricing["wristbands_needed"],
        cost_per_band=pricing["cost_per_band"],
        band_cost=pricing["band_cost"],
        transport_cost=pricing["transport_cost"],
        total_cost=pricing["total_cost"],
        price_per_guest=pricing["price_per_guest"],
        revenue=pricing["revenue"],
        profit=pricing["profit"],
        margin_percent=pricing["margin_percent"],
        white_label=cd.get("white_label", False),
        custom_skin=cd.get("custom_skin", False),
        delivery_to_venue=cd.get("delivery_to_venue", False),
        upsell_total=pricing["upsell_total"],
    )

    if not settings.STRIPE_SECRET_KEY:
        return JsonResponse(
            {
                "error": "Stripe key missing. Add STRIPE_SECRET_KEY in .env.",
                "local_total_cost": str(pricing["total_cost"]),
            },
            status=500,
        )

    amount_cents = int((Decimal(pricing["total_cost"]) * 100).quantize(Decimal("1")))

    session = stripe.checkout.Session.create(
        mode="payment",
        success_url=settings.STRIPE_SUCCESS_URL,
        cancel_url=settings.STRIPE_CANCEL_URL,
        line_items=[
            {
                "quantity": 1,
                "price_data": {
                    "currency": "eur",
                    "unit_amount": amount_cents,
                    "product_data": {
                        "name": f"Event Wristband Package - {event_name}",
                        "description": f"{cd['guests']} guests, {cd['shows']} shows",
                    },
                },
            }
        ],
        metadata={
            "event_name": event_name,
            "event_date": event_date.isoformat() if event_date else "",
            "guests": str(cd["guests"]),
            "shows": str(cd["shows"]),
            "wristband_type": cd["wristband_type"],
            "experience": experience,
            "event_timing": event_timing,
            "checkout_request_id": str(checkout_request.id),
        },
    )

    checkout_request.stripe_session_id = session.id
    checkout_request.save(update_fields=["stripe_session_id"])
    return redirect(session.url, permanent=False)


@csrf_exempt
def stripe_webhook(request):
    payload = request.body
    sig_header = request.META.get("HTTP_STRIPE_SIGNATURE", "")

    if not settings.STRIPE_WEBHOOK_SECRET:
        return JsonResponse({"error": "Missing STRIPE_WEBHOOK_SECRET"}, status=500)

    try:
        event = stripe.Webhook.construct_event(payload, sig_header, settings.STRIPE_WEBHOOK_SECRET)
    except ValueError:
        return JsonResponse({"error": "Invalid payload"}, status=400)
    except stripe.error.SignatureVerificationError:
        return JsonResponse({"error": "Invalid signature"}, status=400)

    # Idempotency: ignore duplicates
    if StripeWebhookEvent.objects.filter(stripe_event_id=event["id"]).exists():
        return JsonResponse({"status": "duplicate"}, status=200)
    StripeWebhookEvent.objects.create(stripe_event_id=event["id"], event_type=event["type"])

    if event["type"] == "checkout.session.completed":
        session = event["data"]["object"]
        session_id = session.get("id", "")
        payment_intent = session.get("payment_intent") or ""
        payment_status = session.get("payment_status") or ""
        amount_total = session.get("amount_total") or 0
        currency = (session.get("currency") or "eur").lower()
        customer_details = session.get("customer_details") or {}
        customer_email = customer_details.get("email") or ""

        try:
            checkout_request = CheckoutRequest.objects.get(stripe_session_id=session_id)
        except CheckoutRequest.DoesNotExist:
            # Fallback to metadata id if present
            meta = session.get("metadata") or {}
            req_id = meta.get("checkout_request_id")
            checkout_request = CheckoutRequest.objects.filter(id=req_id).first()

        if checkout_request:
            was_unpaid = (checkout_request.payment_status or "") != "paid"

            checkout_request.stripe_payment_intent_id = payment_intent
            checkout_request.payment_status = payment_status or "paid"
            checkout_request.amount_total_cents = int(amount_total or 0)
            checkout_request.currency = currency
            checkout_request.stripe_customer_email = customer_email
            checkout_request.paid_at = timezone.now()
            checkout_request.save(
                update_fields=[
                    "stripe_payment_intent_id",
                    "payment_status",
                    "amount_total_cents",
                    "currency",
                    "stripe_customer_email",
                    "paid_at",
                ]
            )

            # Email admin once per paid order (idempotent)
            if (
                (checkout_request.payment_status or "") == "paid"
                and checkout_request.order_email_sent_at is None
                and (was_unpaid or checkout_request.paid_at)
            ):
                to_email = (getattr(settings, "NOTIFY_ORDERS_TO_EMAIL", "") or "").strip()
                if to_email:
                    subject = f"New paid order: {checkout_request.event_name or 'Untitled Event'}"
                    message = "\n".join(
                        [
                            f"Event: {checkout_request.event_name}",
                            f"Date: {checkout_request.event_date}",
                            f"Guests: {checkout_request.guests}",
                            f"Shows: {checkout_request.shows}",
                            f"Wristband: {checkout_request.wristband_type}",
                            f"Total (calculated): €{checkout_request.total_cost}",
                            f"Stripe session: {checkout_request.stripe_session_id}",
                            f"Payment intent: {checkout_request.stripe_payment_intent_id}",
                            f"Amount paid: {checkout_request.amount_total_cents} {checkout_request.currency}",
                            f"Customer email: {checkout_request.stripe_customer_email}",
                            f"Paid at: {checkout_request.paid_at}",
                        ]
                    )
                    try:
                        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [to_email], fail_silently=True)
                        checkout_request.order_email_sent_at = timezone.now()
                        checkout_request.save(update_fields=["order_email_sent_at"])
                    except Exception:
                        pass

    return JsonResponse({"status": "ok"}, status=200)
