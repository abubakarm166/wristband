# Content Quick Edit Guide

This file explains where to make quick updates without digging through the whole codebase.

## 1) Homepage video URL

- File: `templates/website/home.html`
- Section: `#hero`
- Change the Vimeo URL in:
  - `src="https://player.vimeo.com/video/...` on `.hero-bg-vimeo`

## 2) Demo video URL

- File: `templates/website/home.html`
- Section: `#demo`
- Change the Vimeo URL in:
  - `src="https://player.vimeo.com/video/...` on `.demo-video`

## 3) Gallery images (3 images)

- File: `templates/website/home.html`
- Section: `#bands`
- Replace these 3 image paths:
  - `{% static 'images/Gallary Image A.png' %}`
  - `{% static 'images/Gallary Image B.png' %}`
  - `{% static 'images/Gallary Image C.png' %}`

Tip: keep image ratio similar to avoid layout shifts.

## 4) Pricing

### Core pricing logic

- File: `website/calculator.py`
- Main constants at top:
  - `EXPERIENCE_PRO_PER_SHOW`
  - `TIMING_14_DAYS_PER_GUEST`
  - `TIMING_30_DAYS_PER_GUEST`
  - `DELIVERY_TO_VENUE_PER_SHOW`
  - `PRICE_PER_GUEST_TABLE`
  - `BAND_COST_TABLE`

### Frontend labels (text shown to users)

- File: `static/js/main.js`
- I18N keys in both `en` and `nl`, for example:
  - `calc.customDesignPrice`
  - `calc.removeBrandingSub`
  - `timing.expressSub`
  - `timing.standardSub`

## 5) Minimal text phrase changes

- File: `static/js/main.js`
- Update only I18N keys inside:
  - `const I18N.en`
  - `const I18N.nl`

Common examples:
- Headline: `hero.headline`
- Demo title: `demo.title`
- Step titles: `calc.step2Title`, `calc.step3Title`, `calc.step4Title`
- CTA labels: `hero.cta`, `calc.checkoutContinue`

## 6) Affiliate / partner logos bar (currently OFF)

Requested behavior: static gray logos row, no animation.

### Enable/disable switch

- File: `static/js/main.js`
- Config block:
  - `const PARTNER_LOGO_BAR = { enabled: false, logos: [...] }`
- To show the bar: set `enabled: true`

### Change partner/event logos

- Same config block in `static/js/main.js`
- Update entries in `logos`:
  - `src` = logo file path (example: `/static/images/partners/partner-a.png`)
  - `alt` = accessible label

### Markup and styling

- Markup: `templates/website/home.html` (`#partnerLogoBar`, `#partnerLogoRow`)
- Styling: `static/css/style.css`
  - `.partner-logo-bar*` classes

The bar is intentionally simple:
- no slider
- no motion
- grayscale logos only

## 7) Safe rollout checklist

1. Update content/URLs.
2. Refresh homepage and switch EN/NL once.
3. Check mobile width for video and gallery cropping.
4. If enabling logo bar, verify at least 5 logos are present.
5. Run Django app and confirm checkout still calculates correctly.
