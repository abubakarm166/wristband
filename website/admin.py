from django.contrib import admin

from .models import CheckoutRequest


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
        "created_at",
    )
    search_fields = ("event_name", "stripe_session_id")
    list_filter = ("wristband_type", "white_label", "custom_skin", "delivery_to_venue")
