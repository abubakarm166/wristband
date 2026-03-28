from decimal import Decimal, ROUND_HALF_UP


TRANSPORT_PER_BAND = Decimal("0.40")
BUFFER_RATIO = Decimal("1.05")
EXPERIENCE_PRO_FLAT = Decimal("5000")
TIMING_14_DAYS_FLAT = Decimal("50")
TIMING_30_60_DAYS_FLAT = Decimal("30")
# Per show day: venue delivery = 60 × number of shows
DELIVERY_TO_VENUE_PER_SHOW = Decimal("60")

BAND_COST_TABLE = [
    (0, Decimal("0.80")),
    (1000, Decimal("0.80")),
    (4000, Decimal("0.75")),
    (10000, Decimal("0.70")),
    (20000, Decimal("0.65")),
    (50000, Decimal("0.63")),
]

PRICE_PER_GUEST_TABLE = [
    (0, Decimal("1.30")),
    (500, Decimal("1.50")),
    (1000, Decimal("1.50")),
    (3000, Decimal("1.40")),
    (5000, Decimal("1.30")),
    (10000, Decimal("1.20")),
    (20000, Decimal("1.10")),
    (40000, Decimal("1.00")),
    (80000, Decimal("0.90")),
]


def _lookup(value: int, table):
    selected = table[0][1]
    for threshold, result in table:
        if value >= threshold:
            selected = result
        else:
            break
    return selected


def _money(value: Decimal) -> Decimal:
    return value.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)


def calculate_pricing(
    guests: int,
    shows: int,
    white_label: bool,
    custom_skin: bool,
    delivery_to_venue: bool,
    experience: str = "pro",
    event_timing: str = "30",
):
    bands_needed = int((Decimal(guests) * BUFFER_RATIO).to_integral_value(rounding=ROUND_HALF_UP))
    cost_per_band = _lookup(bands_needed, BAND_COST_TABLE)
    band_cost = Decimal(bands_needed) * cost_per_band
    transport_cost = Decimal(bands_needed) * TRANSPORT_PER_BAND
    base_total_cost = band_cost + transport_cost

    price_per_guest = _lookup(guests, PRICE_PER_GUEST_TABLE)
    revenue = Decimal(guests) * price_per_guest

    upsell_white_label = Decimal(bands_needed) * Decimal("0.05") if white_label else Decimal("0")
    upsell_custom_skin = Decimal(bands_needed) * Decimal("0.15") if custom_skin else Decimal("0")
    upsell_delivery = (
        (DELIVERY_TO_VENUE_PER_SHOW * Decimal(shows)) if delivery_to_venue else Decimal("0")
    )
    upsell_experience = EXPERIENCE_PRO_FLAT if experience == "pro" else Decimal("0")
    if event_timing == "14":
        upsell_timing = TIMING_14_DAYS_FLAT
    elif event_timing == "30":
        upsell_timing = TIMING_30_60_DAYS_FLAT
    else:
        upsell_timing = Decimal("0")

    upsell_total = upsell_white_label + upsell_custom_skin + upsell_delivery + upsell_experience + upsell_timing

    # "Your Show Price today" in the new formula set.
    total_cost = revenue + upsell_total
    profit = total_cost - base_total_cost
    margin_percent = (profit / total_cost * Decimal("100")) if total_cost else Decimal("0")
    cost_per_guest = (total_cost / Decimal(guests)) if guests else Decimal("0")

    return {
        "transport_per_band": _money(TRANSPORT_PER_BAND),
        "wristbands_needed": bands_needed,
        "cost_per_band": _money(cost_per_band),
        "band_cost": _money(band_cost),
        "transport_cost": _money(transport_cost),
        "base_total_cost": _money(base_total_cost),
        "price_per_guest": _money(price_per_guest),
        "cost_per_guest": _money(cost_per_guest),
        "revenue": _money(revenue),
        "upsell_white_label": _money(upsell_white_label),
        "upsell_custom_skin": _money(upsell_custom_skin),
        "upsell_delivery": _money(upsell_delivery),
        "upsell_experience": _money(upsell_experience),
        "upsell_timing": _money(upsell_timing),
        "upsell_total": _money(upsell_total),
        "total_cost": _money(total_cost),
        "profit": _money(profit),
        "margin_percent": _money(margin_percent),
    }
