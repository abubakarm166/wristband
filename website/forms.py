from django import forms


WRISTBAND_CHOICES = [
    ("blue-led", "Blue LED Wristband"),
    ("pink-led", "Pink LED Wristband"),
]


class CheckoutForm(forms.Form):
    event_name = forms.CharField(max_length=255, required=False)
    event_date = forms.DateField(widget=forms.DateInput(attrs={"type": "date"}), required=False)
    guests = forms.IntegerField(min_value=1)
    shows = forms.IntegerField(min_value=1, initial=1)
    wristband_type = forms.ChoiceField(choices=WRISTBAND_CHOICES)
    experience = forms.ChoiceField(choices=[("essentials", "Essentials"), ("pro", "Pro")], required=False)
    event_timing = forms.ChoiceField(choices=[("14", "14 days"), ("30", "30-60 days"), ("70", "70+ days")], required=False)
    white_label = forms.BooleanField(required=False)
    custom_skin = forms.BooleanField(required=False)
    delivery_to_venue = forms.BooleanField(required=False)
