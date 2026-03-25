from decimal import Decimal

import stripe
from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.views.decorators.http import require_GET, require_POST

from .calculator import calculate_pricing
from .forms import CheckoutForm, WRISTBAND_CHOICES
from .models import CheckoutRequest

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
