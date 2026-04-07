from django import forms


WRISTBAND_CHOICES = [
    ("blue-led", "Blue LED Wristband"),
    ("pink-led", "Pink LED Wristband"),
]


class CheckoutForm(forms.Form):
    # Client tracking fields (sent to Stripe metadata)
    event_name = forms.CharField(max_length=255, required=True)
    event_date = forms.DateField(widget=forms.DateInput(attrs={"type": "date"}), required=True)
    event_location = forms.CharField(max_length=255, required=True)
    venue = forms.CharField(max_length=255, required=False)
    contact_name = forms.CharField(max_length=255, required=True)
    contact_email = forms.EmailField(required=True)
    contact_phone = forms.CharField(max_length=50, required=False)
    guests = forms.IntegerField(min_value=1)
    shows = forms.IntegerField(min_value=1, initial=3)
    wristband_type = forms.ChoiceField(choices=WRISTBAND_CHOICES)
    experience = forms.ChoiceField(choices=[("essentials", "Essentials"), ("pro", "Pro")], required=False)
    event_timing = forms.ChoiceField(choices=[("14", "14 days"), ("30", "30-60 days"), ("70", "70+ days")], required=False)
    upload_design = forms.FileField(required=False)
    white_label = forms.BooleanField(required=False)
    custom_skin = forms.BooleanField(required=False)
    delivery_to_venue = forms.BooleanField(required=False)

    def clean(self):
        cleaned = super().clean()
        wristband_type = cleaned.get("wristband_type")
        upload = cleaned.get("upload_design")
        if wristband_type == "pink-led" and not upload:
            self.add_error("upload_design", "Please upload an image for this option.")
        return cleaned
