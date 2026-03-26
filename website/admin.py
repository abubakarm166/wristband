from django.contrib import admin

from .models import CheckoutRequest, NewsletterSignup


@admin.register(CheckoutRequest)
class CheckoutRequestAdmin(admin.ModelAdmin):
    list_display = (
        "event_name",
        "event_date",
        "guests",
        "shows",
        "total_cost",
        "payment_status",
        "amount_total_cents",
        "currency",
        "order_email_sent_at",
        "created_at",
    )
    search_fields = ("event_name", "stripe_session_id")
    list_filter = ("wristband_type", "white_label", "custom_skin", "delivery_to_venue")


@admin.register(NewsletterSignup)
class NewsletterSignupAdmin(admin.ModelAdmin):
    list_display = ("email", "created_at")
    search_fields = ("email",)
