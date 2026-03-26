from django.db import models


class CheckoutRequest(models.Model):
    event_name = models.CharField(max_length=255, blank=True, default="")
    event_date = models.DateField(blank=True, null=True)
    guests = models.PositiveIntegerField()
    shows = models.PositiveIntegerField(default=1)
    wristband_type = models.CharField(max_length=64)
    upload_design = models.FileField(upload_to="designs/", blank=True, null=True)

    transport_per_band = models.DecimalField(max_digits=8, decimal_places=2, default=0.40)
    wristbands_needed = models.PositiveIntegerField()
    cost_per_band = models.DecimalField(max_digits=8, decimal_places=2)
    band_cost = models.DecimalField(max_digits=10, decimal_places=2)
    transport_cost = models.DecimalField(max_digits=10, decimal_places=2)
    total_cost = models.DecimalField(max_digits=10, decimal_places=2)
    price_per_guest = models.DecimalField(max_digits=8, decimal_places=2)
    revenue = models.DecimalField(max_digits=10, decimal_places=2)
    profit = models.DecimalField(max_digits=10, decimal_places=2)
    margin_percent = models.DecimalField(max_digits=8, decimal_places=2)

    white_label = models.BooleanField(default=False)
    custom_skin = models.BooleanField(default=False)
    delivery_to_venue = models.BooleanField(default=False)
    upsell_total = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    stripe_session_id = models.CharField(max_length=255, blank=True)
    stripe_payment_intent_id = models.CharField(max_length=255, blank=True)
    stripe_customer_email = models.EmailField(blank=True, default="")
    currency = models.CharField(max_length=10, blank=True, default="eur")
    amount_total_cents = models.PositiveIntegerField(default=0)
    payment_status = models.CharField(max_length=40, blank=True, default="unpaid")
    paid_at = models.DateTimeField(blank=True, null=True)
    order_email_sent_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.event_name or 'Untitled'} ({self.event_date or 'No date'})"


class StripeWebhookEvent(models.Model):
    stripe_event_id = models.CharField(max_length=255, unique=True)
    event_type = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)


class NewsletterSignup(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
