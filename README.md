# Event Wristband Calculator (Phase 1 MVP)

## Stack
- Django backend
- Bootstrap frontend
- Stripe Checkout Sessions API

## Setup
1. Create virtual environment and install dependencies:
   - `python -m venv .venv`
   - `.venv\Scripts\activate`
   - `pip install -r requirements.txt`
2. Copy `.env.example` to `.env` and fill Stripe keys.
3. Run migrations:
   - `python manage.py makemigrations`
   - `python manage.py migrate`
4. Start server:
   - `python manage.py runserver`

## MVP Flow
1. User enters event details in calculator.
2. Frontend requests live calculation (`/api/calculate/`).
3. User clicks checkout.
4. Backend recalculates securely, creates Stripe Checkout Session, and redirects.
5. Stripe metadata includes:
   - `event_name`
   - `event_date`
   - `guests`
   - `shows`

## Pricing Logic Source
Implemented from:
`CALCULATION EXCELL - Fiverr Changes_V2.xlsx` (`Sheet3`).
