# Calculation Updates (Logic Only)

This file documents the calculator logic updates requested from the latest spreadsheet screenshots.

## Scope

- UI layout/styling not changed intentionally.
- Only formulas/values were updated.
- Files touched:
  - `website/calculator.py`
  - `static/js/main.js`
  - `templates/website/home.html` (data values only for investment calculations)

## Core Input Model

The calculator remains driven primarily by:

- `guests` (visitors)
- `shows`

All other values are calculated from rules and toggles.

## Backend Formula Changes (`website/calculator.py`)

### 1) Cost-side base (unchanged from Excel Sheet3 base)

- Wristbands needed = `guests * 1.05`
- Cost per band = lookup by wristbands needed
- Band cost = `wristbands_needed * cost_per_band`
- Transport cost = `wristbands_needed * 0.40`
- Base total cost (internal) = `band_cost + transport_cost`

### 2) Selling price base

- Price per guest = lookup by guests
- Revenue = `guests * price_per_guest`

### 3) Upsells (updated to requested rules)

- White label = `guests * 0.05`
  - Formula meaning: if "Remove OneCrowd branding" is checked:
    - `ANSWER = guests x 0.05`
    - `Your Show Price Today = previous_total + ANSWER`
- Custom skin = `guests * 0.15`
  - Formula meaning: if upload own skin option is selected:
    - `ANSWER = guests x 0.15`
    - `Your Show Price Today = previous_total + ANSWER`
- Delivery to venue = `+60` (flat)
  - Formula meaning: if "Deliver to your venue" is selected:
    - `Your Show Price Today = previous_total + 60`
- Pro experience = `+5000` (flat)
- Timing:
  - 14 days: `+50` (flat)
  - 30-60 days: `+30` (flat)
  - 70+ days: `+0`

### 4) Final charged amount

- `total_cost` now represents **Your Show Price Today**:
  - `total_cost = revenue + upsell_total`

### 5) Profit and margin

- `profit = total_cost - base_total_cost`
- `margin_percent = profit / total_cost * 100`
- `cost_per_guest = total_cost / guests`

## Investment Panel Breakdown Rules (Frontend calc)

Updated to requested formulas:

- 100% Show guarantee = `1000 * shows`
- Instant Crowd Activation system = `2.5 * guests`
- Viral Content Blueprint = `3200` (fixed)
- Aftermovie Content Pack = `400 * shows`
- Fail-Safe Backup System = `350 * shows`
- Universal Lighting Desk Integration = `200` (fixed)
- On-site setup support = `400 * shows`

`Total Value` = sum of all rows above.

## Notes

- Existing API shape is kept (`/api/calculate/` still returns `total_cost`, `cost_per_guest`, etc.).
- Stripe checkout continues to use `total_cost` as the charged amount.
