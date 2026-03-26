from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("api/calculate/", views.calculate_api, name="calculate_api"),
    path("checkout/", views.create_checkout_session, name="create_checkout_session"),
    path("stripe/webhook/", views.stripe_webhook, name="stripe_webhook"),
]
