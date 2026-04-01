/* global bootstrap, Swiper */

const I18N = {
  en: {
    "nav.demo": "Demo",
    "nav.howItWorks": "How it works",
    "nav.experience": "Experience",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact Us",
    "nav.langShort": "NL",
    "hero.headline": "Most Dutch Events are missing this.",
    "hero.cta": "Turn your crowd into the show",
    "demo.title": "Concert & Festival Organisers. This is for you.",
    "demo.ps": "PS: Give it 30 seconds.",
    "howItWorks.title": "This is how it works.",
    "crowdWays.title": "Two ways to light up your crowd",
    "crowdWays.essentialsTitle": "Essentials (Included)",
    "crowdWays.essentialsLead": "Plug In. Go Live.",
    "crowdWays.essentials.b1": "Basic crowd lighting",
    "crowdWays.essentials.b2": "Perfect color. Perfect timing.",
    "crowdWays.essentials.b3": "Static & random effects",
    "crowdWays.essentials.b4": "Ready to go",
    "crowdWays.proTitle": "Pro Experience",
    "crowdWays.proLead": "Full show control",
    "crowdWays.pro.b1": "Next-level crowd control",
    "crowdWays.pro.b2": "Perfect color. Perfect timing.",
    "crowdWays.pro.b3": "Advanced crowd animations",
    "crowdWays.pro.b4": "Built for high-impact shows",
    "crowdWays.play": "Play animation",
    "crowdWays.pause": "Pause animation",
    "calc.title": "Plan. Price. Pay.",
    "calc.eventSetup": "Event Setup",
    "calc.showDays": "Show Days",
    "calc.totalGuests": "Total Guests",
    "calc.guestsInfoAria": "Guests info",
    "calc.guestsInfoTip": "Total guests across all shows",
    "calc.chooseDesign": "Choose Your Design",
    "calc.designInfoAria": "Design options info",
    "calc.designInfoTip": "Reusable wristbands.<br>No disposable festival locks.",
    "calc.included": "Included",
    "calc.customDesignPrice": "+€0,15 per Guest",
    "calc.downloadTemplate": "Download template",
    "calc.removeWatermark": "Remove Motion Volume Watermark",
    "calc.removeWatermarkSub": "(€0,05 per guest)",
    "calc.chooseExperience": "Choose Your Experience",
    "calc.experienceInfoAria": "Explore Essentials vs Pro (jump to section)",
    "calc.experienceInfoTip": "Explore the difference",
    "calc.essentialsTitle": "Essentials",
    "calc.essentialsDesc": "Simple plug & play setup",
    "calc.recommended": "Recommended",
    "calc.proTitle": "Pro experience",
    "calc.proDesc": "Full control over your crowd lighting.",
    "delivery.title": "Delivery",
    "delivery.infoAria": "Delivery info",
    "delivery.infoTip": "We coordinate delivery timing with your production schedule.",
    "delivery.pickup": "Pick up - Eindhoven",
    "delivery.venue": "Pre-delivered to your loading dock",
    "deliverySpeed.title": "Delivery Speed",
    "deliverySpeed.infoAria": "Delivery speed info",
    "deliverySpeed.infoTip": "<strong>Need it faster?</strong><br>Contact sales",
    "timing.express": "Express",
    "timing.expressSub": "(€0.30 per guest)",
    "timing.days14": "14 days",
    "timing.standard": "Standard",
    "timing.standardSub": "(€0.10 per guest)",
    "timing.days30": "30 days",
    "timing.flexible": "Flexible Timing",
    "timing.free": "Free",
    "unit.perGuest": "per guest",
    "form.uploadAlert": "Please upload an image to continue.",

    "whatYouGet.title": "This is what you get",
    "whatYouGet.guarantee.title": "100% Show Guarantee",
    "whatYouGet.guarantee.infoAria": "Guarantee info",
    "whatYouGet.guarantee.infoTip": "Full terms below",
    "whatYouGet.guarantee.lead": "If your crowd doesn’t light up, you don’t pay.",
    "whatYouGet.kit.title": "Show Control Kit",
    "whatYouGet.kit.b1": "Perfect Color - Perfect Timing",
    "whatYouGet.kit.b2": "Controlled from your Lighting Desk",
    "whatYouGet.kit.footPrefix": "Antenna &",
    "whatYouGet.kit.footSuffix": "Wristbands included",
    "whatYouGet.blueprint.title": "Motion Volume Viral Blueprint",
    "whatYouGet.blueprint.b1": "Turns your crowd into shareable content",
    "whatYouGet.blueprint.foot": "Designed to amplify user-generated content",
    "whatYouGet.aftermovie.title": "Aftermovie Content Pack",
    "whatYouGet.aftermovie.infoAria": "Aftermovie Content Pack info",
    "whatYouGet.aftermovie.infoTip": "Your biggest crowd moment, captured by our videographer.",
    "whatYouGet.aftermovie.b1": "Your biggest crowd moment, captured",
    "whatYouGet.aftermovie.foot": "An upgrade on your Aftermovie & Socials",
    "whatYouGet.failsafe.title": "Fail-safe Backup System",
    "whatYouGet.failsafe.sub": "Backup Antenna included",
    "whatYouGet.failsafe.tag": "Your show never stops.",
    "whatYouGet.essentials.title": "Plug in. Go Live.",
    "whatYouGet.essentials.sub": "Works with any Lighting Desk",
    "whatYouGet.essentials.tag": "Setup done in minutes.",
    "whatYouGet.pro.title": "Total Crowd Control",
    "whatYouGet.pro.sub": "Maximum crowd impact",
    "whatYouGet.pro.tag": "Precision control",
    "whatYouGet.onsite.title": "On-site Show Guidance",
    "whatYouGet.onsite.sub": "Your operator gets the most out of every drop",
    "whatYouGet.nmb.title": "No Shortages",
    "whatYouGet.nmb.sub": "+5% extra wristbands included.",
    "whatYouGet.nmb.prefix": "NMB:",
    "whatYouGet.nmb.suffix": "extra bands",

    "showPrice.title": "Your Show Price",
    "showPrice.line.guarantee": "100% Show Guarantee",
    "showPrice.line.kit": "Show Control Kit",
    "showPrice.line.blueprint": "Motion Volume’s Viral Blueprint",
    "showPrice.line.aftermovie": "Aftermovie Content Pack",
    "showPrice.line.failsafe": "Fail-Safe Backup System",
    "showPrice.line.essentials": "Plug in. Go Live.",
    "showPrice.line.pro": "Total Crowd Control",
    "showPrice.line.onsite": "On-site Show Guidance",
    "showPrice.line.nmb": "No Shortages",
    "showPrice.normal": "Normal show price:",
    "showPrice.total": "Your Show Price",
    "showPrice.perGuest": "per guest.",
    "showPrice.refund": "€0,10 refunded per returned wristband",
    "showPrice.cta": "Activate your crowd",
    "showPrice.contactTitle": "Contact us directly:",
    "showPrice.tel": "TEL:",
    "showPrice.email": "EMAIL:",
  },
  nl: {
    "nav.demo": "DEMO",
    "nav.howItWorks": "Zo werkt het live",
    "nav.experience": "Ervaring",
    "nav.pricing": "Prijzen",
    "nav.contact": "Contact",
    "nav.langShort": "EN",
    "hero.headline": "Dit is wat jouw event compleet maakt.",
    "hero.cta": "Activeer je publiek",
    "demo.title": "Als je events organiseert, kijk 30 seconden.",
    "demo.ps": "PS: Je snapt het in 30 seconden.",
    "howItWorks.title": "Zo werkt het.",
    "crowdWays.title": "Twee manieren om je publiek te activeren",
    "crowdWays.essentialsTitle": "Essentials (inbegrepen)",
    "crowdWays.essentialsLead": "Plug & Play",
    "crowdWays.essentials.b1": "Basis publieksverlichting",
    "crowdWays.essentials.b2": "Perfecte kleur. Perfecte timing",
    "crowdWays.essentials.b3": "Statische & willekeurige sparkle effecten",
    "crowdWays.essentials.b4": "Klaar voor gebruik",
    "crowdWays.proTitle": "Pro ervaring",
    "crowdWays.proLead": "Volledige showcontrole",
    "crowdWays.pro.b1": "Next-level publiekscontrole",
    "crowdWays.pro.b2": "Perfecte kleur. Perfecte timing",
    "crowdWays.pro.b3": "Geavanceerde crowd-animaties",
    "crowdWays.pro.b4": "Gebouwd voor impact",
    "crowdWays.play": "Animatie afspelen",
    "crowdWays.pause": "Animatie pauzeren",
    "calc.title": "Plan. Prijs. Betaal.",
    "calc.eventSetup": "Jouw event",
    "calc.showDays": "Aantal dagen",
    "calc.totalGuests": "Aantal bezoekers",
    "calc.guestsInfoAria": "Info aantal bezoekers",
    "calc.guestsInfoTip": "Totale aantal bezoekers",
    "calc.chooseDesign": "Kies je design",
    "calc.designInfoAria": "Info design opties",
    "calc.designInfoTip": "Herbruikbare polsband locks.",
    "calc.included": "Inbegrepen",
    "calc.customDesignPrice": "+€0,15 per bezoeker",
    "calc.downloadTemplate": "Download Template",
    "calc.removeWatermark": "Verwijder Motion Volume-logo",
    "calc.removeWatermarkSub": "(€0,05 per bezoeker)",
    "calc.chooseExperience": "Kies je ervaring",
    "calc.experienceInfoAria": "Bekijk het verschil",
    "calc.experienceInfoTip": "Bekijk het verschil!",
    "calc.essentialsTitle": "Essentials",
    "calc.essentialsDesc": "Simpele Plug & Play setup",
    "calc.recommended": "Aanbevolen",
    "calc.proTitle": "Pro ervaring",
    "calc.proDesc": "Volledige belichting controle over het publiek",
    "delivery.title": "Levering",
    "delivery.infoAria": "Levering info",
    "delivery.infoTip": "We stemmen de levering af op jullie productieschema.",
    "delivery.pickup": "Ophalen - Eindhoven",
    "delivery.venue": "Vooraf afgeleverd bij jouw loading dock",
    "deliverySpeed.title": "Levering Snelheid",
    "deliverySpeed.infoAria": "Levering snelheid info",
    "deliverySpeed.infoTip": "Sneller nodig? Contact sales",
    "timing.express": "Express",
    "timing.expressSub": "(€0,30 per bezoeker)",
    "timing.days14": "14 dagen",
    "timing.standard": "Standaard",
    "timing.standardSub": "(€0,10 per bezoeker)",
    "timing.days30": "30 dagen",
    "timing.flexible": "Flexibele Tijd",
    "timing.free": "Gratis",
    "unit.perGuest": "per bezoeker",
    "form.uploadAlert": "Upload een afbeelding om door te gaan.",

    "whatYouGet.title": "Dit is wat je krijgt.",
    "whatYouGet.guarantee.title": "100% Show Garantie",
    "whatYouGet.guarantee.infoAria": "Show garantie info",
    "whatYouGet.guarantee.infoTip": "Zie algemene voorwaarden hieronder",
    "whatYouGet.guarantee.lead": "Als je publiek niet oplicht, betaal je niet.",
    "whatYouGet.kit.title": "Show Control Kit",
    "whatYouGet.kit.b1": "Perfecte Kleuren. Perfecte Timing.",
    "whatYouGet.kit.b2": "Aangestuurd vanuit je lichttafel",
    "whatYouGet.kit.footPrefix": "Antenne &",
    "whatYouGet.kit.footSuffix": "polsbanden",
    "whatYouGet.blueprint.title": "Motion Volume Viral Blueprint",
    "whatYouGet.blueprint.b1": "Maakt van je publiek deelbare content",
    "whatYouGet.blueprint.foot": "Ontworpen om user-generated content te versterken",
    "whatYouGet.aftermovie.title": "Aftermovie Content Pack",
    "whatYouGet.aftermovie.infoAria": "Aftermovie Content Pack info",
    "whatYouGet.aftermovie.infoTip": "Vastgelegd door onze videograaf",
    "whatYouGet.aftermovie.b1": "Jouw grootste publieksmoment, vastgelegd",
    "whatYouGet.aftermovie.foot": "Een upgrade voor je aftermovie & socials",
    "whatYouGet.failsafe.title": "Fail-safe Backup Systeem",
    "whatYouGet.failsafe.sub": "Inclusief back-up antenne",
    "whatYouGet.failsafe.tag": "Je show stopt nooit.",
    "whatYouGet.essentials.title": "Plug in. Go Live.",
    "whatYouGet.essentials.sub": "Werkt met elke lichttafel",
    "whatYouGet.essentials.tag": "Binnen enkele minuten opgezet",
    "whatYouGet.pro.title": "Volledige publiek Control",
    "whatYouGet.pro.sub": "Werkt met elke lichttafel",
    "whatYouGet.pro.tag": "Binnen enkele minuten opgezet",
    "whatYouGet.onsite.title": "On-site Show Guidance",
    "whatYouGet.onsite.sub": "Je operator haalt het maximale uit elke drop",
    "whatYouGet.nmb.title": "Geen tekorten",
    "whatYouGet.nmb.sub": "+5% extra polsbanden inbegrepen",
    "whatYouGet.nmb.prefix": "(NMB)",
    "whatYouGet.nmb.suffix": "",

    "showPrice.title": "Jouw show prijs",
    "showPrice.line.guarantee": "100% Show Garantie",
    "showPrice.line.kit": "Show Control Kit",
    "showPrice.line.blueprint": "Motion Volume's Viral Blueprint",
    "showPrice.line.aftermovie": "Aftermovie Content Pack",
    "showPrice.line.failsafe": "Fail-Safe Backup Systeem",
    "showPrice.line.essentials": "Plug in. Go Live.",
    "showPrice.line.pro": "Volledige Publiek Control",
    "showPrice.line.onsite": "On-site Show Guidance",
    "showPrice.line.nmb": "Geen tekorten",
    "showPrice.normal": "Normale show prijs:",
    "showPrice.total": "Jouw show prijs:",
    "showPrice.perGuest": "per bezoeker",
    "showPrice.refund": "€0,10 terugbetaling per geretourneerde polsband",
    "showPrice.cta": "Activeer je crowd",
    "showPrice.contactTitle": "Direct contact:",
    "showPrice.tel": "TEL:",
    "showPrice.email": "EMAIL:",
  },
};

function getLang() {
  const saved = (window.localStorage && window.localStorage.getItem("lang")) || "";
  return saved === "nl" ? "nl" : "en";
}

function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || "";
}

function setLang(lang) {
  const next = lang === "nl" ? "nl" : "en";
  try {
    window.localStorage && window.localStorage.setItem("lang", next);
  } catch (_) {
    // ignore storage failures
  }
  document.documentElement.setAttribute("lang", next);
  const dict = I18N[next] || {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n") || "";
    if (!key) return;
    const value = dict[key];
    if (typeof value === "string") el.textContent = value;
  });

  // Attribute translations (tooltips, aria-labels, etc.)
  document.querySelectorAll("[data-i18n-attr][data-i18n-attr-key]").forEach((el) => {
    const attr = (el.getAttribute("data-i18n-attr") || "").trim();
    const key = (el.getAttribute("data-i18n-attr-key") || "").trim();
    if (!attr || !key) return;
    const value = dict[key];
    if (typeof value === "string") el.setAttribute(attr, value);
  });

  // Refresh tooltips so new `data-bs-title` is picked up.
  if (typeof bootstrap !== "undefined" && bootstrap.Tooltip) {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
      const inst = bootstrap.Tooltip.getInstance(el);
      if (inst) inst.dispose();
      const useHtml = el.getAttribute("data-bs-html") === "true";
      new bootstrap.Tooltip(el, { html: useHtml, sanitize: false });
    });
  }

  // Keep the Crowd Ways play buttons in sync (aria-label is set dynamically).
  document.querySelectorAll(".crowd-ways-gif-wrap").forEach((wrap) => {
    const btn = wrap.querySelector(".crowd-ways-play-btn");
    if (!btn) return;
    const playing = wrap.classList.contains("is-playing");
    btn.setAttribute("aria-label", playing ? t("crowdWays.pause") : t("crowdWays.play"));
  });
}

function initLanguageToggle() {
  const btn = document.getElementById("langToggle");
  if (!btn) return;
  btn.addEventListener("click", () => setLang(getLang() === "nl" ? "en" : "nl"));
  setLang(getLang());
}

const guestsInput = document.getElementById("guests"); // hidden, submitted to backend
const guestsSlider = document.getElementById("guestsSlider"); // UI slider (0..8)
const showsInput = document.getElementById("shows");
const guestsValue = document.getElementById("guestsValue");
const showsValue = document.getElementById("showsValue");
const whiteLabelInput = document.getElementById("whiteLabel");
const customSkinInput = document.getElementById("customSkin");
const deliveryInput = document.getElementById("delivery");
const bandPink = document.getElementById("bandPink");
const bandBlue = document.getElementById("bandBlue");
const wristbandUpload = document.getElementById("wristbandUpload");
const uploadBtn = document.querySelector(".wristband-upload-btn");
const uploadPreview = document.querySelector(".wristband-upload-preview");
const uploadText = document.querySelector(".wristband-upload-text");
const uploadCard = document.querySelector(".wristband-card--upload");
const deliveryPickup = document.getElementById("deliveryPickup");
const deliveryVenue = document.getElementById("deliveryVenue");
const totalValueEl = document.getElementById("totalValue");
const showPriceTodayEl = document.getElementById("showPriceToday");
const experienceEssentials = document.getElementById("expEssentials");
const experiencePro = document.getElementById("expPro");
const proExperiencePrice = document.getElementById("proExperiencePrice");
const timing14 = document.getElementById("timing14");
const timing30 = document.getElementById("timing30");
const timing70 = document.getElementById("timing70");
const nmbValueEl = document.getElementById("nmbValue");
const includedWristbandPreviewEl = document.getElementById("includedWristbandPreview");

const outputs = {
  pricePerGuest: document.getElementById("pricePerGuest"),
};

function formatEURNumber(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "0,00";
  return new Intl.NumberFormat("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

function formatInt(n) {
  return new Intl.NumberFormat().format(n);
}

function setSliderFill(sliderEl) {
  const min = Number(sliderEl.min || 0);
  const max = Number(sliderEl.max || 100);
  const val = Number(sliderEl.value || min);
  const pct = max === min ? 0 : ((val - min) / (max - min)) * 100;
  sliderEl.style.setProperty("--fill", `${pct}%`);
}

function applyExperienceVisibility() {
  const experience = experienceEssentials?.checked ? "essentials" : "pro";
  document.querySelectorAll("[data-show-when]").forEach((el) => {
    const when = (el.getAttribute("data-show-when") || "").trim();
    // Many elements use Bootstrap utilities like `d-flex` (which are `!important`),
    // so toggling inline `style.display` won't reliably hide them. Use `d-none`.
    el.classList.toggle("d-none", when !== experience);
  });
}

function applyIncludedWristbandPreview() {
  if (!includedWristbandPreviewEl) return;
  if (!bandBlue?.checked) return;
  const srcA = includedWristbandPreviewEl.getAttribute("data-src-a") || "";
  const srcB = includedWristbandPreviewEl.getAttribute("data-src-b") || "";
  const nextSrc = whiteLabelInput?.checked ? srcB : srcA;
  if (nextSrc && includedWristbandPreviewEl.getAttribute("src") !== nextSrc) {
    includedWristbandPreviewEl.classList.add("is-swapping");
    const swap = () => {
      includedWristbandPreviewEl.setAttribute("src", nextSrc);
      includedWristbandPreviewEl.removeEventListener("load", onLoad);
      includedWristbandPreviewEl.addEventListener("load", onLoad, { once: true });
      // If the image is cached and load doesn't fire, still fade back in.
      window.setTimeout(() => includedWristbandPreviewEl.classList.remove("is-swapping"), 250);
    };
    const onLoad = () => includedWristbandPreviewEl.classList.remove("is-swapping");
    window.setTimeout(swap, 120);
  }
}

const GUEST_STEPS = [500, 750, 1000, 2500, 5000, 10000, 20000, 40000, 80000];
/** Must match `DELIVERY_TO_VENUE_PER_SHOW` in website/calculator.py */
const DELIVERY_PER_SHOW_EUR = 60;

function syncGuestSliderToHidden() {
  if (!guestsSlider || !guestsInput) return;
  const idx = Math.max(0, Math.min(GUEST_STEPS.length - 1, parseInt(guestsSlider.value || "0", 10)));
  guestsInput.value = String(GUEST_STEPS[idx]);
}

function wireSliderTicks() {
  document.querySelectorAll(".slider-tick").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-for");
      const slider = document.getElementById(targetId);
      if (!slider) return;
      const idx = btn.getAttribute("data-index");
      const value = btn.getAttribute("data-value");
      if (idx !== null && idx !== undefined && idx !== "") {
        slider.value = idx;
      } else if (value !== null && value !== undefined && value !== "") {
        slider.value = value;
      }
      refreshPricing();
    });
  });
}

async function refreshPricing() {
  syncGuestSliderToHidden();
  const guests = parseInt(guestsInput?.value || "0", 10);
  const shows = parseInt(showsInput?.value || "1", 10);
  applyExperienceVisibility();
  applyIncludedWristbandPreview();

  const deliveryVenuePriceDisplay = document.getElementById("deliveryVenuePriceDisplay");
  if (deliveryVenuePriceDisplay && Number.isFinite(shows) && shows >= 1) {
    deliveryVenuePriceDisplay.textContent = formatInt(DELIVERY_PER_SHOW_EUR * shows);
  }

  const showControlKitBandCount = document.getElementById("showControlKitBandCount");
  if (showControlKitBandCount && Number.isFinite(guests) && guests >= 1) {
    showControlKitBandCount.textContent = formatInt(guests);
  }

  if (!guests || !shows || guests < 1 || shows < 1) return;

  if (guestsValue) guestsValue.textContent = formatInt(guests);
  if (showsValue) showsValue.textContent = formatInt(shows);
  if (guestsSlider) setSliderFill(guestsSlider);
  if (showsInput) setSliderFill(showsInput);

  // Sync delivery radios -> hidden checkbox used by backend calculator
  if (deliveryVenue && deliveryInput) {
    deliveryInput.checked = deliveryVenue.checked;
  }

  // Wristband "Make it yours" selection -> custom_skin upsell
  if (customSkinInput && bandPink) {
    customSkinInput.checked = bandPink.checked;
  }

  // Pro card display: 5000 / guests (per guest)
  if (proExperiencePrice) {
    const perGuest = guests > 0 ? 5000 / guests : 0;
    proExperiencePrice.textContent = `+€${formatEURNumber(perGuest)} ${t("unit.perGuest")}`;
  }

  const query = new URLSearchParams({
    guests: String(guests),
    shows: String(shows),
    white_label: String(Boolean(whiteLabelInput?.checked)),
    custom_skin: String(Boolean(customSkinInput?.checked)),
    delivery_to_venue: String(Boolean(deliveryInput?.checked)),
    experience: experienceEssentials?.checked ? "essentials" : "pro",
    event_timing: timing14?.checked ? "14" : timing70?.checked ? "70" : "30",
  });

  let data = null;
  const response = await fetch(`/api/calculate/?${query.toString()}`);
  if (response.ok) {
    data = await response.json();
  }

  // Normal show price breakdown (visual line items; sum -> #totalValue)
  // Show Control Kit (requested):
  // - Wristband total price = price per visitor * total guests (use API "revenue")
  // - Add custom skin (0.15 * guests) and watermark removal (0.05 * guests) when selected
  // - Add Fail-safe Backup System (350 * shows)
  //
  // 100% Show Guarantee (requested):
  // - 10% of show control kit + 10% of (10% of fail-safe backup)
  if (totalValueEl) {
    let total = 0;
    document.querySelectorAll(".feat-cost").forEach((el) => {
      const derive = el.getAttribute("data-derive");
      let value;

      if (derive === "show-control-kit") {
        const revenue = data && typeof data.revenue !== "undefined" ? Number(data.revenue) : 0;
        const customSkin = customSkinInput?.checked ? 0.15 * guests : 0;
        const whiteLabel = whiteLabelInput?.checked ? 0.05 * guests : 0;
        const failBackup = 350 * shows;
        value = revenue + customSkin + whiteLabel + failBackup;
      } else if (derive === "upsell-experience") {
        value = data && typeof data.upsell_experience !== "undefined" ? Number(data.upsell_experience) : 0;
      } else if (derive === "no-shortages") {
        // No shortages (requested):
        // guests * 0.05 * price_per_guest  == 0.05 * revenue
        // plus (custom skin and/or watermark) each also multiplied by 0.05
        const revenue = data && typeof data.revenue !== "undefined" ? Number(data.revenue) : 0;
        const customSkin = customSkinInput?.checked ? 0.15 * guests : 0;
        const whiteLabel = whiteLabelInput?.checked ? 0.05 * guests : 0;
        value = 0.05 * (revenue + customSkin + whiteLabel);
      } else if (derive === "show-guarantee") {
        // Use the same show control kit basis as above (but without re-reading DOM)
        const revenue = data && typeof data.revenue !== "undefined" ? Number(data.revenue) : 0;
        const customSkin = customSkinInput?.checked ? 0.15 * guests : 0;
        const whiteLabel = whiteLabelInput?.checked ? 0.05 * guests : 0;
        const failBackup = 350 * shows;
        const showControlKit = revenue + customSkin + whiteLabel + failBackup;
        value = 0.1 * showControlKit + 0.1 * (0.1 * failBackup);
      } else {
        const base = Number(el.getAttribute("data-base") || "0");
        const multType = el.getAttribute("data-mult");
        const mult = multType === "shows" ? shows : multType === "guests" ? guests : 1;
        value = base * mult;
      }

      if (el.getAttribute("data-normal") === "true") {
        total += value;
      }
      if (el.getAttribute("data-display") === "infinity") {
        el.textContent = "∞";
      } else {
        el.textContent = formatEURNumber(value);
      }
    });
    totalValueEl.textContent = formatEURNumber(total);
  }

  if (data) {
    if (outputs.pricePerGuest) outputs.pricePerGuest.textContent = formatEURNumber(data.cost_per_guest);
    if (showPriceTodayEl) showPriceTodayEl.textContent = formatEURNumber(data.total_cost);
    if (nmbValueEl) {
      const needed = typeof data.wristbands_needed !== "undefined" ? Number(data.wristbands_needed) : 0;
      const extra = Math.max(0, Math.round(needed - guests));
      nmbValueEl.textContent = formatInt(extra);
    }
  }
}

function wireWristbandUpload() {
  if (!wristbandUpload || !bandPink || !bandBlue) return;

  let lastObjectUrl = null;

  const clearUpload = () => {
    wristbandUpload.value = "";
    if (lastObjectUrl) {
      URL.revokeObjectURL(lastObjectUrl);
      lastObjectUrl = null;
    }
    if (uploadPreview) {
      uploadPreview.removeAttribute("src");
      uploadPreview.style.display = "none";
    }
    if (uploadCard) uploadCard.classList.remove("has-preview");
    if (uploadText) uploadText.textContent = "[UPLOAD]";
    wristbandUpload.removeAttribute("required");
  };

  const requireUpload = () => {
    wristbandUpload.setAttribute("required", "required");
  };

  const openPickerIfNeeded = () => {
    if (bandPink.checked) {
      requireUpload();
      wristbandUpload.click();
    } else {
      clearUpload();
    }
    refreshPricing();
  };

  bandPink.addEventListener("change", openPickerIfNeeded);
  bandBlue.addEventListener("change", openPickerIfNeeded);

  if (uploadBtn) {
    uploadBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (!bandPink.checked) bandPink.checked = true;
      requireUpload();
      refreshPricing();
      wristbandUpload.click();
    });
  }

  wristbandUpload.addEventListener("change", () => {
    const file = wristbandUpload.files?.[0];
    if (!file) {
      clearUpload();
      return;
    }
    if (lastObjectUrl) URL.revokeObjectURL(lastObjectUrl);
    lastObjectUrl = URL.createObjectURL(file);
    if (uploadPreview) {
      uploadPreview.src = lastObjectUrl;
      uploadPreview.style.display = "block";
    }
    if (uploadCard) uploadCard.classList.add("has-preview");
    if (uploadText) uploadText.textContent = "[Change]";
    refreshPricing();
  });

  if (bandPink.checked) requireUpload();
  else clearUpload();

  const form = document.getElementById("checkoutForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      if (bandPink.checked && !(wristbandUpload.files && wristbandUpload.files.length)) {
        e.preventDefault();
        wristbandUpload.focus();
        alert(t("form.uploadAlert") || "Please upload an image to continue.");
      }
    });
  }
}

function wireCrowdWayGifs() {
  document.querySelectorAll(".crowd-ways-gif-wrap").forEach((wrap) => {
    const img = wrap.querySelector(".crowd-ways-gif");
    const inner = wrap.querySelector(".crowd-ways-gif-inner");
    const btn = wrap.querySelector(".crowd-ways-play-btn");
    const iconPlay = wrap.querySelector(".crowd-ways-btn-play");
    const iconPause = wrap.querySelector(".crowd-ways-btn-pause");
    const gifUrl = (img && img.getAttribute("data-animated-src")) || "";
    if (!img || !btn) return;
    if (!gifUrl) return;

    const setPlaying = (playing) => {
      wrap.classList.toggle("is-playing", playing);
      btn.setAttribute("aria-pressed", playing ? "true" : "false");
      btn.setAttribute("aria-label", playing ? t("crowdWays.pause") : t("crowdWays.play"));
      if (iconPlay) iconPlay.classList.toggle("d-none", playing);
      if (iconPause) iconPause.classList.toggle("d-none", !playing);
      if (playing) {
        img.addEventListener(
          "error",
          () => {
            setPlaying(false);
          },
          { once: true },
        );
        img.src = gifUrl;
        img.alt = img.dataset.imgAlt || img.getAttribute("data-img-alt") || "";
      } else {
        img.removeAttribute("src");
        img.alt = "";
      }
    };

    const toggleFromEvent = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setPlaying(!wrap.classList.contains("is-playing"));
    };

    btn.addEventListener("click", toggleFromEvent);
    if (inner) {
      inner.addEventListener("click", (e) => {
        if (e.target.closest(".crowd-ways-play-btn")) return;
        toggleFromEvent(e);
      });
    }
  });
}

function wireCrowdWaysLightbox() {
  const lb = document.getElementById("crowdWaysLightbox");
  const lbImg = document.getElementById("crowdWaysLightboxImg");
  const backdrop = document.querySelector(".crowd-ways-lightbox-backdrop");
  if (!lb || !lbImg || !backdrop) return;

  const closeLightbox = () => {
    lb.classList.add("d-none");
    lbImg.removeAttribute("src");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const openLightbox = (src, alt) => {
    if (!src) return;
    lbImg.src = src;
    lbImg.alt = alt || "";
    lb.classList.remove("d-none");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  backdrop.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lb.classList.contains("d-none")) {
      e.preventDefault();
      closeLightbox();
    }
  });

  // Only used for included design preview (experience cards should NOT zoom).
  document.querySelectorAll(".wristband-card--free .wristband-thumb-frame img").forEach((img) => {
    img.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const src = img.currentSrc || img.src;
      if (!src) return;
      openLightbox(src, img.getAttribute("alt") || "");
    });
  });
}

function initTooltips() {
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
    const useHtml = el.getAttribute("data-bs-html") === "true";
    if (typeof bootstrap === "undefined") return;
    new bootstrap.Tooltip(el, { html: useHtml, sanitize: false });
  });
}

function initTestimonialSwiper() {
  if (typeof Swiper !== "undefined" && document.querySelector(".testimonial-swiper")) {
    new Swiper(".testimonial-swiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      grabCursor: true,
      autoplay: { delay: 3500, disableOnInteraction: false },
      navigation: { nextEl: ".testimonial-next", prevEl: ".testimonial-prev" },
    });
  }
}

function initCrowdWays() {
  wireCrowdWayGifs();
  wireCrowdWaysLightbox();
}

function initCalculator() {
  applyExperienceVisibility();
  [
    guestsSlider || guestsInput,
    showsInput,
    whiteLabelInput,
    customSkinInput,
    deliveryInput,
    bandPink,
    experienceEssentials,
    experiencePro,
    timing14,
    timing30,
    timing70,
  ]
    .filter(Boolean)
    .forEach((el) => {
      el.addEventListener("input", refreshPricing);
      el.addEventListener("change", refreshPricing);
    });

  if (deliveryPickup) deliveryPickup.addEventListener("change", refreshPricing);
  if (deliveryVenue) deliveryVenue.addEventListener("change", refreshPricing);

  wireSliderTicks();
  refreshPricing();
  wireWristbandUpload();
}

function init() {
  initLanguageToggle();
  initTooltips();
  initTestimonialSwiper();
  initCrowdWays();
  initCalculator();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

