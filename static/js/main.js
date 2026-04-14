/* global bootstrap, Swiper */

const I18N = {
  en: {
    "nav.demo": "Demo",
    "nav.howItWorks": "How it works",
    "nav.experience": "Experience",
    "nav.pricing": "Pricing",
    "hero.headline": "Most Dutch Events are missing this",
    "hero.cta": "Turn your crowd into the show",
    "demo.title": "Concert & Festival Organisers. This is for you.",
    "demo.ps": "PS: Give it 30 seconds.",
    "howItWorks.title": "This is how it works.",
    "howItWorks.independent": "Fully independent from WiFi and mobile networks",
    "crowdWays.title": "Two ways to light up your crowd",
    "crowdWays.essentialsTitle": "Essentials (Included)",
    "crowdWays.essentialsLead": "Plug In. Go Live.",
    "crowdWays.essentials.b1": "Basic crowd lighting",
    "crowdWays.essentials.b2": "Perfect color. Perfect timing.",
    "crowdWays.essentials.b3": "Static, Strobe, Rainbow & Sparkle effects",
    "crowdWays.essentials.b4": "Works on any Lighting Desk",
    "crowdWays.essentials.b5": "Ready to go",
    "crowdWays.proTitle": "Pro Experience",
    "crowdWays.proLead": "Full show control",
    "crowdWays.pro.b1": "Next-level crowd control",
    "crowdWays.pro.b2": "Perfect color. Perfect timing.",
    "crowdWays.pro.b3": "Advanced crowd animations",
    "crowdWays.pro.b4": "Works on any Lighting Desk",
    "crowdWays.pro.b5": "Built for high-impact shows",
    "crowdWays.play": "Play animation",
    "crowdWays.pause": "Pause animation",
    "calc.title": "What you pay",
    "calc.stepPrefix": "Step",
    "calc.step2Title": "What you get",
    "calc.step3Title": "Choose Delivery & Timing",
    "calc.step3GuestsEq": " guests = € ",
    "calc.step3TotalSuffix": " total",
    "calc.perShowSuffix": " / show",
    "calc.step4Title": "What you pay",
    "calc.stepCompareTitle": "What you pay",
    "calc.stepCompareSub": "Step 4 vs Step 2",
    "calc.step4SubtitleTip": "Everything in this step reflects your selections from the previous steps.",
    "calc.step4SubtitleInfoAria": "Package info",
    "showPrice.kitInfoAria": "Show Control Kit info",
    "showPrice.kitInfoTip": "<strong>Perfect Color - Perfect Timing</strong><br>Controlled from your Lighting Desk",
    "calc.deliveryStepTitle": "Delivery & timing",
    "calc.checkoutBack": "← Back",
    "calc.checkoutContinue": "Continue →",
    "calc.buildYourShow": "Build Your Show",
    "calc.step1Tagline": "No need to pay the full show price upfront. Pay per guest instead.",
    "calc.standardShowPriceShort": "Standard show price",
    "calc.step1TaglineBefore": "No",
    "calc.step1TaglineAfter": " upfront. Just pay per guest instead.",
    "calc.step1ExperienceShortEssentials": "Essentials",
    "calc.step1ExperienceShortPro": "Pro",
    "calc.showDaysQuestion": "How many show days are you planning?",
    "calc.customizeWristbands": "Customize Your Wristbands",
    "calc.selectedExperience": "Selected experience:",
    "calc.perGuestShort": "/ guest",
    "calc.yourTotal": "Your Total",
    "calc.guestsWord": "guests",
    "calc.formulaApprox": "approx.",
    "calc.formulaOver": "over",
    "calc.formulaShowDaysSuffix": "show day(s)",
    "calc.standardShowPriceLabel": "Standard show price:",
    "calc.eventDatesLabel": "Event date(s) (optional)",
    "calc.eventDatesPlaceholder": "e.g. 13 October, 20 December",
    "calc.deliveryLocationLabel": "Delivery location (optional)",
    "calc.deliveryLocationPlaceholder": "e.g. Loading dock / contact point",
    "calc.additionalNoteLabel": "Additional note (optional)",
    "calc.additionalNotePlaceholder": "Anything we should know about your show or delivery?",
    "calc.adjustShowHint": "Adjust your show size to see your price",
    "calc.standardSkin": "Standard Skin",
    "calc.removeBranding": "Remove 'Powered By Motion Volume' logo",
    "calc.removeBrandingSub": "(+ €0,05 per ticket)",
    "calc.formulaTimes": "×",
    "calc.eventSetup": "Event Setup",
    "calc.showDays": "Show Days",
    "calc.totalGuests": "Total Guests",
    "calc.guestsInfoAria": "Guests info",
    "calc.guestsInfoTip": "Total guests across all shows",
    "calc.chooseDesign": "Choose Your Design",
    "calc.designInfoAria": "Design options info",
    "calc.designInfoTip": "Reusable wristbands.<br>No disposable festival locks.",
    "calc.included": "Included",
    "calc.customDesignPrice": "(+ €0,15 per ticket)",
    "calc.downloadTemplate": "Download template",
    "calc.removeWatermark": "Remove 'Powered By Motion Volume' logo",
    "calc.removeWatermarkSub": "(+ €0,05 per ticket)",
    "calc.chooseExperience": "Choose Your Experience",
    "calc.experienceInfoAria": "Explore Essentials vs Pro (jump to section)",
    "calc.experienceInfoTip": "Explore the difference",
    "calc.essentialsTitle": "Essentials",
    "calc.essentialsDesc": "Static, Strobe, Rainbow & Sparkle effects with a plug & play setup",
    "calc.recommended": "Recommended",
    "calc.proTitle": "Pro experience",
    "calc.proDesc": "Full control over your crowd lighting.",
    "calc.proPerTicketUnit": "per ticket",
    "delivery.title": "Logistics",
    "delivery.infoAria": "Logistics info",
    "delivery.infoTip": "We coordinate delivery timing with your production schedule.",
    "delivery.pickup": "Pick up - Eindhoven",
    "delivery.pickupFee": "(Free)",
    "delivery.venue": "Pre-delivered to your loading dock",
    "deliverySpeed.title": "Production Speed",
    "deliverySpeed.infoAria": "Production speed info",
    "deliverySpeed.infoTip": "<strong>Need it faster?</strong><br>Contact sales",
    "timing.express": "Express",
    "timing.expressSub": "(€0,90 / guest)",
    "timing.days14": "14 days",
    "timing.standard": "Standard",
    "timing.standardSub": "(€0,10 / guest)",
    "timing.days30": "30 days",
    "timing.flexible": "Flexible Timing",
    "timing.free": "Free",
    "unit.perGuest": "per guest",
    "form.uploadAlert": "Please upload an image to continue.",

    "whatYouGet.title": "This is what you get",
    "whatYouGet.subtitle": "Everything below is included in your package",
    "whatYouGet.guarantee.title": "100% Show Guarantee",
    "whatYouGet.guarantee.infoAria": "Guarantee info",
    "whatYouGet.guarantee.infoTip": "Full terms below",
    "whatYouGet.guarantee.lead": "If your crowd doesn’t light up, you don’t pay.",
    "whatYouGet.kit.title": "Show Control Kit",
    "whatYouGet.kit.b1": "Perfect Color - Perfect Timing",
    "whatYouGet.kit.b2": "Controlled from your Lighting Desk",
    "whatYouGet.kit.footPrefix": "Antenna &",
    "whatYouGet.kit.footSuffix": "Wristbands included",
    "whatYouGet.kit.antennaEssentials": "Essentials Antenna",
    "whatYouGet.kit.antennaPro": "Pro Antenna",
    "whatYouGet.kit.wristbandsIncluded": "Wristbands included",
    "whatYouGet.kit.wristbandsNonBrandedMod": "non-branded",
    "whatYouGet.kit.wristbandsFullyBrandedMod": "Fully branded",
    "whatYouGet.blueprint.title": "Motion Volume Viral Blueprint",
    "whatYouGet.blueprint.b1": "Your crowd lights up as part of the show",
    "whatYouGet.blueprint.foot": "Creates moments people share & remember",
    "whatYouGet.aftermovie.title": "Aftermovie Content Pack",
    "whatYouGet.aftermovie.infoAria": "Aftermovie Content Pack info",
    "whatYouGet.aftermovie.infoTip": "Your biggest crowd moment, captured by our videographer.",
    "whatYouGet.aftermovie.b1": "Your biggest crowd moment, captured",
    "whatYouGet.aftermovie.filmNote": "Filmed by our videographer",
    "whatYouGet.aftermovie.foot": "An upgrade on your Aftermovie & Socials",
    "whatYouGet.failsafe.title": "Fail-safe Backup System",
    "whatYouGet.failsafe.sub": "Backup Antenna included",
    "whatYouGet.failsafe.tag": "Your show never stops.",
    "whatYouGet.essentials.title": "Plug & Play Setup",
    "whatYouGet.essentials.sub": "Works with any Lighting Desk",
    "whatYouGet.essentials.tag": "Setup done in minutes.",
    "whatYouGet.pro.title": "Total Crowd Control",
    "whatYouGet.pro.sub": "Maximum crowd impact",
    "whatYouGet.pro.tag": "Precision control",
    "whatYouGet.onsite.title": "On-site Show Guidance",
    "whatYouGet.onsite.sub": "Your Lighting Operator gets the most out of every drop",
    "whatYouGet.onsite.infoTip": "We don't control your lighting.<br>Your operator stays in charge.<br>We advise your operator to get the best results.",
    "whatYouGet.nmb.title": "No Shortages",
    "whatYouGet.nmb.sub": "Every visitor gets a wristband. Guaranteed.",
    "whatYouGet.nmb.infoTip": "<strong>+5% extra wristbands included.</strong><br>Just in case.",
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
    "showPrice.standardRow": "Standard Show Price",
    "showPrice.bonus": "Bonus",
    "showPrice.total": "Your Total",
    "showPrice.totalSub": "Your Show Price",
    "showPrice.perGuest": "/ guest",
    "showPrice.refundBefore": "€0,10 ",
    "showPrice.refundHighlight": "refunded",
    "showPrice.refundAfter": " per returned wristband",
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
    "hero.headline": "Dit is wat jouw event compleet maakt",
    "hero.cta": "Activeer je publiek",
    "demo.title": "Als je events organiseert, kijk 30 seconden.",
    "demo.ps": "PS: Je snapt het in 30 seconden.",
    "howItWorks.title": "Zo werkt het.",
    "howItWorks.independent": "Volledig onafhankelijk van wifi en mobiele netwerken",
    "crowdWays.title": "Twee manieren om je publiek te activeren",
    "crowdWays.essentialsTitle": "Essentials (inbegrepen)",
    "crowdWays.essentialsLead": "Plug & Play",
    "crowdWays.essentials.b1": "Basis publieksverlichting",
    "crowdWays.essentials.b2": "Perfecte kleur. Perfecte timing",
    "crowdWays.essentials.b3": "Statisch, stroboscoop, regenboog & sparkle effecten",
    "crowdWays.essentials.b4": "Werkt met elke lichttafel",
    "crowdWays.essentials.b5": "Klaar voor gebruik",
    "crowdWays.proTitle": "Pro ervaring",
    "crowdWays.proLead": "Volledige showcontrole",
    "crowdWays.pro.b1": "Next-level publiekscontrole",
    "crowdWays.pro.b2": "Perfecte kleur. Perfecte timing",
    "crowdWays.pro.b3": "Geavanceerde crowd-animaties",
    "crowdWays.pro.b4": "Werkt met elke lichttafel",
    "crowdWays.pro.b5": "Gebouwd voor impact",
    "crowdWays.play": "Animatie afspelen",
    "crowdWays.pause": "Animatie pauzeren",
    "calc.title": "Wat je betaalt",
    "calc.stepPrefix": "Stap",
    "calc.step2Title": "Wat je krijgt",
    "calc.step3Title": "Kies levering & timing",
    "calc.step3GuestsEq": " bezoekers = €",
    "calc.step3TotalSuffix": " totaal",
    "calc.perShowSuffix": " / show",
    "calc.step4Title": "Wat je betaalt",
    "calc.stepCompareTitle": "Wat je betaalt",
    "calc.stepCompareSub": "Stap 4 vs Stap 2",
    "calc.step4SubtitleTip": "Alles in deze stap sluit aan op je eerdere keuzes.",
    "calc.step4SubtitleInfoAria": "Pakket info",
    "showPrice.kitInfoAria": "Show Control Kit info",
    "showPrice.kitInfoTip": "<strong>Perfecte kleur - Perfecte timing</strong><br>Bestuurbaar vanaf je lichttafel",
    "calc.deliveryStepTitle": "Levering & timing",
    "calc.checkoutBack": "← Terug",
    "calc.checkoutContinue": "Verder →",
    "calc.buildYourShow": "Bouw je show",
    "calc.step1Tagline": "Je betaalt niet het volledige showbedrag vooraf. Je betaalt per bezoeker.",
    "calc.standardShowPriceShort": "Standaard showprijs",
    "calc.step1TaglineBefore": "Geen",
    "calc.step1TaglineAfter": " vooraf. Betaal per bezoeker.",
    "calc.step1ExperienceShortEssentials": "Essentials",
    "calc.step1ExperienceShortPro": "Pro",
    "calc.showDaysQuestion": "Hoeveel showdagen plan je?",
    "calc.customizeWristbands": "Personaliseer je polsbanden",
    "calc.selectedExperience": "Gekozen ervaring:",
    "calc.perGuestShort": "/ bezoeker",
    "calc.yourTotal": "Jouw totaal",
    "calc.guestsWord": "bezoekers",
    "calc.formulaApprox": "ca.",
    "calc.formulaOver": "over",
    "calc.formulaShowDaysSuffix": "showdag(en)",
    "calc.standardShowPriceLabel": "Standaard showprijs:",
    "calc.eventDatesLabel": "Eventdatum(s) (optioneel)",
    "calc.eventDatesPlaceholder": "bijv. 13 oktober, 20 december",
    "calc.deliveryLocationLabel": "Afleverlocatie (optioneel)",
    "calc.deliveryLocationPlaceholder": "bijv. Laadperron / contactpersoon",
    "calc.additionalNoteLabel": "Extra opmerking (optioneel)",
    "calc.additionalNotePlaceholder": "Iets dat we moeten weten over je show of levering?",
    "calc.adjustShowHint": "Pas je showgrootte aan om je prijs te zien",
    "calc.standardSkin": "Standaard skin",
    "calc.removeBranding": "Verwijder Motion Volume-branding",
    "calc.removeBrandingSub": "(+ €0,05 per ticket)",
    "calc.formulaTimes": "×",
    "calc.eventSetup": "Jouw event",
    "calc.showDays": "Aantal dagen",
    "calc.totalGuests": "Aantal bezoekers",
    "calc.guestsInfoAria": "Info aantal bezoekers",
    "calc.guestsInfoTip": "Totale aantal bezoekers",
    "calc.chooseDesign": "Kies je design",
    "calc.designInfoAria": "Info design opties",
    "calc.designInfoTip": "Herbruikbare polsband locks.",
    "calc.included": "Inbegrepen",
    "calc.customDesignPrice": "(+ €0,15 per ticket)",
    "calc.downloadTemplate": "Download Template",
    "calc.removeWatermark": "Verwijder Motion Volume-branding",
    "calc.removeWatermarkSub": "(+ €0,05 per ticket)",
    "calc.chooseExperience": "Kies je ervaring",
    "calc.experienceInfoAria": "Bekijk het verschil",
    "calc.experienceInfoTip": "Bekijk het verschil!",
    "calc.essentialsTitle": "Essentials",
    "calc.essentialsDesc": "Statische, Strobe, Rainbow- en Sparkle-effecten met een plug & play setup",
    "calc.recommended": "Aanbevolen",
    "calc.proTitle": "Pro ervaring",
    "calc.proDesc": "Volledige belichting controle over het publiek",
    "calc.proPerTicketUnit": "per ticket",
    "delivery.title": "Logistiek",
    "delivery.infoAria": "Logistiek info",
    "delivery.infoTip": "We stemmen de levering af op jullie productieschema.",
    "delivery.pickup": "Ophalen - Eindhoven",
    "delivery.pickupFee": "(Free)",
    "delivery.venue": "Vooraf afgeleverd bij jouw loading dock",
    "deliverySpeed.title": "Productiesnelheid",
    "deliverySpeed.infoAria": "Productiesnelheid info",
    "deliverySpeed.infoTip": "Sneller nodig? Contact sales",
    "timing.express": "Express",
    "timing.expressSub": "(€0,90 / bezoeker)",
    "timing.days14": "14 dagen",
    "timing.standard": "Standaard",
    "timing.standardSub": "(€0,10 / bezoeker)",
    "timing.days30": "30 dagen",
    "timing.flexible": "Flexibele Tijd",
    "timing.free": "Gratis",
    "unit.perGuest": "per bezoeker",
    "form.uploadAlert": "Upload een afbeelding om door te gaan.",

    "whatYouGet.title": "Dit is wat je krijgt.",
    "whatYouGet.subtitle": "Alles hieronder zit in je pakket",
    "whatYouGet.guarantee.title": "100% Show Garantie",
    "whatYouGet.guarantee.infoAria": "Show garantie info",
    "whatYouGet.guarantee.infoTip": "Zie algemene voorwaarden hieronder",
    "whatYouGet.guarantee.lead": "Als je publiek niet oplicht, betaal je niet.",
    "whatYouGet.kit.title": "Show Control Kit",
    "whatYouGet.kit.b1": "Perfecte Kleuren. Perfecte Timing.",
    "whatYouGet.kit.b2": "Aangestuurd vanuit je lichttafel",
    "whatYouGet.kit.footPrefix": "Antenne &",
    "whatYouGet.kit.footSuffix": "polsbanden",
    "whatYouGet.kit.antennaEssentials": "Essentials-antenne",
    "whatYouGet.kit.antennaPro": "Pro-antenne",
    "whatYouGet.kit.wristbandsIncluded": "polsbanden inbegrepen",
    "whatYouGet.kit.wristbandsNonBrandedMod": "zonder branding",
    "whatYouGet.kit.wristbandsFullyBrandedMod": "volledige branding",
    "whatYouGet.blueprint.title": "Motion Volume Viral Blueprint",
    "whatYouGet.blueprint.b1": "Je publiek licht op als onderdeel van de show",
    "whatYouGet.blueprint.foot": "Momenten die mensen delen en onthouden",
    "whatYouGet.aftermovie.title": "Aftermovie Content Pack",
    "whatYouGet.aftermovie.infoAria": "Aftermovie Content Pack info",
    "whatYouGet.aftermovie.infoTip": "Vastgelegd door onze videograaf",
    "whatYouGet.aftermovie.b1": "Jouw grootste publieksmoment, vastgelegd",
    "whatYouGet.aftermovie.filmNote": "Gefilmd door onze videograaf",
    "whatYouGet.aftermovie.foot": "Een upgrade voor je aftermovie & socials",
    "whatYouGet.failsafe.title": "Fail-safe Backup Systeem",
    "whatYouGet.failsafe.sub": "Inclusief back-up antenne",
    "whatYouGet.failsafe.tag": "Je show stopt nooit.",
    "whatYouGet.essentials.title": "Plug & Play setup",
    "whatYouGet.essentials.sub": "Werkt met elke lichttafel",
    "whatYouGet.essentials.tag": "Binnen enkele minuten opgezet",
    "whatYouGet.pro.title": "Volledige publiek Control",
    "whatYouGet.pro.sub": "Werkt met elke lichttafel",
    "whatYouGet.pro.tag": "Binnen enkele minuten opgezet",
    "whatYouGet.onsite.title": "On-site Show Guidance",
    "whatYouGet.onsite.sub": "Je licht-operator haalt het maximale uit elke drop",
    "whatYouGet.onsite.infoTip": "Wij sturen je licht niet aan.<br>Jouw operator blijft aan de knoppen.<br>Wij adviseren voor het beste resultaat.",
    "whatYouGet.nmb.title": "Geen tekorten",
    "whatYouGet.nmb.sub": "Elke bezoeker krijgt een polsband. Gegarandeerd.",
    "whatYouGet.nmb.infoTip": "<strong>+5% extra polsbanden inbegrepen.</strong><br>Voor het geval dat.",
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
    "showPrice.standardRow": "Standaard showprijs",
    "showPrice.bonus": "Bonus",
    "showPrice.total": "Jouw totaal",
    "showPrice.totalSub": "Jouw show prijs",
    "showPrice.perGuest": "/ bezoeker",
    "showPrice.refundBefore": "€0,10 ",
    "showPrice.refundHighlight": "terugbetaling",
    "showPrice.refundAfter": " per geretourneerde polsband",
    "showPrice.refund": "€0,10 terugbetaling per geretourneerde polsband",
    "showPrice.cta": "Activeer je crowd",
    "showPrice.contactTitle": "Direct contact:",
    "showPrice.tel": "TEL:",
    "showPrice.email": "EMAIL:",
  },
};

// Partner logo bar: keep disabled until partners are approved.
// To enable later: set `enabled: true` and replace logo paths/alts below.
const PARTNER_LOGO_BAR = {
  enabled: false,
  logos: [
    { src: "/static/images/Logo Placeholder.png", alt: "Partner logo 1" },
    { src: "/static/images/Logo Placeholder.png", alt: "Partner logo 2" },
    { src: "/static/images/Logo Placeholder.png", alt: "Partner logo 3" },
    { src: "/static/images/Logo Placeholder.png", alt: "Partner logo 4" },
    { src: "/static/images/Logo Placeholder.png", alt: "Partner logo 5" },
  ],
};

function getLang() {
  const saved = (window.localStorage && window.localStorage.getItem("lang")) || "";
  if (saved === "en" || saved === "nl") return saved;
  return "nl"; // default language on first visit
}

function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || "";
}

const CHECKOUT_STEP_TITLE_KEYS = [
  "calc.buildYourShow",
  "calc.step2Title",
  "calc.step3Title",
  "calc.step4Title",
  "calc.stepCompareTitle",
];
let checkoutFlowStep = 1;

function updateCheckoutFlowHeadingUI() {
  document.querySelectorAll(".checkout-step").forEach((panel) => {
    const s = Number(panel.getAttribute("data-checkout-step"));
    if (!Number.isFinite(s) || s < 1 || s > 5) return;
    const mainHeading = panel.querySelector(".checkout-flow-main-title");
    if (mainHeading) {
      const key = CHECKOUT_STEP_TITLE_KEYS[s - 1];
      if (key) mainHeading.textContent = t(key);
    }
  });
  const secTitle = document.getElementById("calculatorSectionTitle");
  if (secTitle) secTitle.classList.toggle("d-none", checkoutFlowStep === 1);
}

function syncDataSyncPriceMirrors() {
  const normal = totalValueEl?.textContent?.trim() || "0,00";
  const normalNoCents = normal.split(",")[0] || normal;
  const today = showPriceTodayEl?.textContent?.trim() || "0,00";
  const perGuest = outputs.pricePerGuest?.textContent?.trim() || "0,00";
  const gc = guestsInput ? formatInt(parseInt(guestsInput.value || "0", 10)) : "0";
  const sc = showsInput ? formatInt(parseInt(showsInput.value || "0", 10)) : "0";
  document.querySelectorAll('[data-sync-price="normal"]').forEach((el) => {
    el.textContent = normal;
  });
  document.querySelectorAll('[data-sync-price="normalNoCents"]').forEach((el) => {
    el.textContent = normalNoCents;
  });
  document.querySelectorAll('[data-sync-price="today"]').forEach((el) => {
    el.textContent = today;
  });
  document.querySelectorAll('[data-sync-price="perGuest"]').forEach((el) => {
    el.textContent = perGuest;
  });
  document.querySelectorAll('[data-sync-price="guestsCount"]').forEach((el) => {
    el.textContent = gc;
  });
  document.querySelectorAll('[data-sync-price="showsCount"]').forEach((el) => {
    el.textContent = sc;
  });
}

function applyCheckoutStepUI(next) {
  checkoutFlowStep = next;
  const flowRoot = document.querySelector(".checkout-flow");
  if (flowRoot) flowRoot.setAttribute("data-current-step", String(next));
  document.querySelectorAll(".checkout-step").forEach((panel) => {
    const s = Number(panel.getAttribute("data-checkout-step"));
    const active = s === checkoutFlowStep;
    panel.classList.toggle("d-none", !active);
    panel.setAttribute("aria-hidden", active ? "false" : "true");
  });
  const backBtn = document.getElementById("checkoutBack");
  const nextBtn = document.getElementById("checkoutNext");
  const step1ContinueBtn = document.getElementById("step1ContinueBtn");
  if (backBtn) backBtn.disabled = checkoutFlowStep === 1;
  if (nextBtn) nextBtn.classList.toggle("d-none", checkoutFlowStep === 4 || checkoutFlowStep === 5 || checkoutFlowStep === 1);
  if (step1ContinueBtn) step1ContinueBtn.classList.toggle("d-none", checkoutFlowStep !== 1);
  const termsLink = document.getElementById("checkoutFlowTerms");
  if (termsLink) termsLink.classList.toggle("d-none", checkoutFlowStep !== 4);
  updateCheckoutFlowHeadingUI();
  if (checkoutFlowStep === 4) {
    try {
      void refreshPricing();
    } catch (_) {
      // ignore if calculator DOM not ready
    }
  }
}

function goToCheckoutStep(step, opts = {}) {
  const next = Math.max(1, Math.min(5, step));
  const prev = checkoutFlowStep;

  const scrollAfter = () => {
    if (!opts.noScroll) {
      const calcSection = document.getElementById("calculator");
      if (calcSection) calcSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (next === prev) {
    scrollAfter();
    return;
  }

  const skipAnimate =
    opts.skipAnimate === true ||
    (typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  const outgoing = document.querySelector(`[data-checkout-step="${prev}"]`);
  const incoming = document.querySelector(`[data-checkout-step="${next}"]`);

  if (skipAnimate || !outgoing || !incoming) {
    applyCheckoutStepUI(next);
    scrollAfter();
    return;
  }

  const backBtn = document.getElementById("checkoutBack");
  const nextBtn = document.getElementById("checkoutNext");
  const step1ContinueBtn = document.getElementById("step1ContinueBtn");
  const lockNav = (v) => {
    [backBtn, nextBtn, step1ContinueBtn].forEach((b) => {
      if (b) b.disabled = v;
    });
  };

  const forward = next > prev;
  let exitTimer = null;
  let enterTimer = null;
  let enterPhaseStarted = false;
  let enterDone = false;

  lockNav(true);
  outgoing.classList.remove("checkout-step--exit-forward", "checkout-step--exit-back");
  outgoing.classList.add(forward ? "checkout-step--exit-forward" : "checkout-step--exit-back");

  const runEnterPhase = () => {
    if (enterPhaseStarted) return;
    enterPhaseStarted = true;
    if (exitTimer) window.clearTimeout(exitTimer);
    outgoing.classList.remove("checkout-step--exit-forward", "checkout-step--exit-back");
    outgoing.classList.add("d-none");
    outgoing.setAttribute("aria-hidden", "true");

    incoming.classList.remove("d-none");
    incoming.setAttribute("aria-hidden", "false");
    incoming.classList.remove("checkout-step--enter-forward", "checkout-step--enter-back");
    incoming.classList.add(forward ? "checkout-step--enter-forward" : "checkout-step--enter-back");

    const finish = () => {
      if (enterDone) return;
      enterDone = true;
      if (enterTimer) window.clearTimeout(enterTimer);
      incoming.classList.remove("checkout-step--enter-forward", "checkout-step--enter-back");
      applyCheckoutStepUI(next);
      lockNav(false);
      scrollAfter();
      initTooltips();
    };

    incoming.addEventListener(
      "animationend",
      (e) => {
        if (e.target !== incoming) return;
        finish();
      },
      { once: true }
    );
    enterTimer = window.setTimeout(finish, 480);
  };

  outgoing.addEventListener(
    "animationend",
    (e) => {
      if (e.target !== outgoing) return;
      runEnterPhase();
    },
    { once: true }
  );
  exitTimer = window.setTimeout(runEnterPhase, 420);
}

function initCheckoutFlow() {
  const backBtn = document.getElementById("checkoutBack");
  const nextBtn = document.getElementById("checkoutNext");
  const step1ContinueBtn = document.getElementById("step1ContinueBtn");
  if (!backBtn || !nextBtn) return;
  backBtn.addEventListener("click", () => goToCheckoutStep(checkoutFlowStep - 1));
  nextBtn.addEventListener("click", () => goToCheckoutStep(checkoutFlowStep + 1));
  if (step1ContinueBtn) step1ContinueBtn.addEventListener("click", () => goToCheckoutStep(2));
  goToCheckoutStep(1, { noScroll: true, skipAnimate: true });
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
  try {
    if (typeof bootstrap !== "undefined" && bootstrap.Tooltip) {
      document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
        const inst = bootstrap.Tooltip.getInstance(el);
        if (inst) inst.dispose();
        const useHtml = el.getAttribute("data-bs-html") === "true";
        new bootstrap.Tooltip(el, { html: useHtml, sanitize: false });
      });
    }
  } catch (_) {
    // don't block language switch if tooltip init fails
  }

  // Keep the Crowd Ways play buttons in sync (aria-label is set dynamically).
  document.querySelectorAll(".crowd-ways-gif-wrap").forEach((wrap) => {
    const btn = wrap.querySelector(".crowd-ways-play-btn");
    if (!btn) return;
    const playing = wrap.classList.contains("is-playing");
    btn.setAttribute("aria-label", playing ? t("crowdWays.pause") : t("crowdWays.play"));
  });

  const langBtnEn = document.getElementById("langBtnEn");
  const langBtnNl = document.getElementById("langBtnNl");
  if (langBtnEn) langBtnEn.classList.toggle("is-active", next === "en");
  if (langBtnNl) langBtnNl.classList.toggle("is-active", next === "nl");

  // Update dynamic strings (e.g. "per guest" / "per bezoeker" on Pro card)
  try {
    void refreshPricing();
  } catch (_) {
    // ignore if calculator not ready yet
  }
  try {
    updateCheckoutFlowHeadingUI();
  } catch (_) {
    // ignore before checkout flow DOM exists
  }
}

function initLanguageToggle() {
  document.addEventListener("click", (e) => {
    const en = e.target.closest("#langBtnEn");
    const nl = e.target.closest("#langBtnNl");
    if (en) {
      e.preventDefault();
      setLang("en");
    } else if (nl) {
      e.preventDefault();
      setLang("nl");
    }
  });
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

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Step 2 "Show control kit" foot line — spreadsheet logic (antenna + skin + branding). */
function applyShowControlKitFootline() {
  const el = document.getElementById("showControlKitFootLine");
  if (!el) return;
  const guests = parseInt(guestsInput?.value || "0", 10);
  const countStr = Number.isFinite(guests) && guests >= 1 ? formatInt(guests) : "—";
  const antennaLabel = experienceEssentials?.checked ? t("whatYouGet.kit.antennaEssentials") : t("whatYouGet.kit.antennaPro");
  const stdSkin = Boolean(bandBlue?.checked);
  const uploadSkin = Boolean(bandPink?.checked);
  const removeBranding = Boolean(whiteLabelInput?.checked);
  const wi = t("whatYouGet.kit.wristbandsIncluded");
  const a = escapeHtml(antennaLabel);
  const c = escapeHtml(countStr);
  const spanA = `<span class="feature-highlight-num">${a}</span>`;
  const spanC = `<span class="feature-highlight-num">${c}</span>`;

  let html;
  if (stdSkin && !removeBranding) {
    html = `${spanA} & ${spanC} ${escapeHtml(wi)}`;
  } else if (stdSkin && removeBranding) {
    const nb = escapeHtml(t("whatYouGet.kit.wristbandsNonBrandedMod"));
    html = `${spanA} & ${spanC}, <span class="feature-highlight-num">${nb}</span> ${escapeHtml(wi)}`;
  } else if (uploadSkin && removeBranding) {
    const fb = escapeHtml(t("whatYouGet.kit.wristbandsFullyBrandedMod"));
    html = `${spanA} & ${spanC}, <span class="feature-highlight-num">${fb}</span> ${escapeHtml(wi)}`;
  } else {
    html = `${spanA} & ${spanC} ${escapeHtml(wi)}`;
  }

  // Step 4 "Show Control Kit" tooltip: show only the last sentence from this card.
  const kitTipText = `${antennaLabel} & ${countStr} ${wi}`;
  document.querySelectorAll('[data-dynamic-tip="show-control-kit-included"]').forEach((btn) => {
    btn.setAttribute("data-bs-html", "false");
    btn.setAttribute("data-bs-title", kitTipText);
    if (typeof bootstrap !== "undefined" && bootstrap.Tooltip) {
      const inst = bootstrap.Tooltip.getInstance(btn);
      if (inst) inst.dispose();
      new bootstrap.Tooltip(btn, { html: false, sanitize: false });
    }
  });
  el.innerHTML = html;
}

const GUEST_STEPS = [500, 750, 1000, 2500, 5000, 10000, 20000, 40000, 80000];
/** Must match `DELIVERY_TO_VENUE_PER_SHOW` in website/calculator.py */
const DELIVERY_PER_SHOW_EUR = 249.99;

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

function updateStep4DeliveryTimingSummary(data) {
  const delTitle = document.getElementById("step4SummaryDeliveryTitle");
  const delPrice = document.getElementById("step4SummaryDeliveryPrice");
  const timeTitle = document.getElementById("step4SummaryTimingTitle");
  const timeSub = document.getElementById("step4SummaryTimingSub");
  const timePrice = document.getElementById("step4SummaryTimingPrice");
  if (!delTitle || !delPrice || !timeTitle || !timePrice || !data) return;

  const freePillHtml = `<span class="step4-free-pill">${t("timing.free")}</span>`;

  delPrice.classList.remove("d-none", "show-price-summary__timing--free", "show-price-detail-row__price--flex");

  delTitle.textContent = deliveryPickup?.checked ? t("delivery.pickup") : t("delivery.venue");
  delPrice.textContent = `€ ${formatEURNumber(data.upsell_delivery)}`;

  timePrice.classList.remove("show-price-summary__timing--free", "show-price-detail-row__price--flex");
  if (timeSub) timeSub.classList.remove("d-none");

  /* Same label as Step 3 section “Production Speed”; option name lives in the subtitle. */
  timeTitle.textContent = t("deliverySpeed.title");

  if (timing14?.checked) {
    if (timeSub) timeSub.textContent = `(${t("timing.express")} · ${t("timing.days14")})`;
    timePrice.textContent = `€ ${formatEURNumber(data.upsell_timing)}`;
  } else if (timing30?.checked) {
    if (timeSub) timeSub.textContent = `(${t("timing.standard")} · ${t("timing.days30")})`;
    timePrice.textContent = `€ ${formatEURNumber(data.upsell_timing)}`;
  } else {
    /* Flexible (default): show Free only (no strike reference). */
    if (timeSub) {
      timeSub.classList.remove("d-none");
      timeSub.textContent = `(${t("timing.flexible")})`;
    }
    timePrice.classList.add("show-price-detail-row__price--flex");
    timePrice.innerHTML = freePillHtml;
  }
}

async function refreshPricing() {
  syncGuestSliderToHidden();
  const guests = parseInt(guestsInput?.value || "0", 10);
  const shows = parseInt(showsInput?.value || "1", 10);
  applyExperienceVisibility();
  applyIncludedWristbandPreview();
  applyShowControlKitFootline();

  const deliveryVenuePriceDisplay = document.getElementById("deliveryVenuePriceDisplay");
  if (deliveryVenuePriceDisplay && Number.isFinite(shows) && shows >= 1) {
    deliveryVenuePriceDisplay.textContent = formatEURNumber(DELIVERY_PER_SHOW_EUR * shows);
  }

  if (!guests || !shows || guests < 1 || shows < 1) {
    const step1Exp = document.getElementById("step1ExperienceLabel");
    if (step1Exp) {
      step1Exp.textContent = experienceEssentials?.checked
        ? t("calc.step1ExperienceShortEssentials")
        : t("calc.step1ExperienceShortPro");
    }
    syncDataSyncPriceMirrors();
    return;
  }

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

  // Pro card display: (5000 * shows) / guests (per guest)
  if (proExperiencePrice) {
    const perGuest = guests > 0 ? (5000 * shows) / guests : 0;
    proExperiencePrice.textContent = `+€${formatEURNumber(perGuest)} ${t("calc.proPerTicketUnit")}`;
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
  // - Add Fail-safe Backup System (Essentials: 350 * shows, Pro: 5000 * shows)
  //
  // 100% Show Guarantee (requested):
  // - 10% of show control kit + 10% of (10% of fail-safe backup)
  if (totalValueEl) {
    const failBackupPerShow = experienceEssentials?.checked ? 350 : 5000;
    const failBackupTotal = failBackupPerShow * shows;
    let total = 0;
    document.querySelectorAll(".feat-cost").forEach((el) => {
      const derive = el.getAttribute("data-derive");
      let value;

      if (derive === "show-control-kit") {
        const revenue = data && typeof data.revenue !== "undefined" ? Number(data.revenue) : 0;
        const customSkin = customSkinInput?.checked ? 0.15 * guests : 0;
        const whiteLabel = whiteLabelInput?.checked ? 0.05 * guests : 0;
        value = revenue + customSkin + whiteLabel + failBackupTotal;
      } else if (derive === "fail-backup") {
        value = failBackupTotal;
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
        const showControlKit = revenue + customSkin + whiteLabel + failBackupTotal;
        value = 0.1 * showControlKit + 0.1 * (0.1 * failBackupTotal);
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
    updateStep4DeliveryTimingSummary(data);
    if (outputs.pricePerGuest) outputs.pricePerGuest.textContent = formatEURNumber(data.cost_per_guest);
    if (showPriceTodayEl) showPriceTodayEl.textContent = formatEURNumber(data.total_cost);
    if (nmbValueEl) {
      const needed = typeof data.wristbands_needed !== "undefined" ? Number(data.wristbands_needed) : 0;
      const extra = Math.max(0, Math.round(needed - guests));
      nmbValueEl.textContent = formatInt(extra);
    }
  }

  const step1Exp = document.getElementById("step1ExperienceLabel");
  if (step1Exp) {
    step1Exp.textContent = experienceEssentials?.checked
      ? t("calc.step1ExperienceShortEssentials")
      : t("calc.step1ExperienceShortPro");
  }
  syncDataSyncPriceMirrors();
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
  const lbGallery = document.getElementById("crowdWaysLightboxGallery");
  const backdrop = document.querySelector(".crowd-ways-lightbox-backdrop");
  if (!lb || !lbGallery || !backdrop) return;

  const closeLightbox = () => {
    lb.classList.add("d-none");
    lbGallery.replaceChildren();
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const openLightbox = (images, alt) => {
    const list = Array.isArray(images) ? images.filter(Boolean) : [];
    if (!list.length) return;
    lbGallery.replaceChildren();
    list.slice(0, 4).forEach((src, idx) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = alt ? `${alt} ${idx + 1}` : `Preview ${idx + 1}`;
      img.loading = "lazy";
      lbGallery.appendChild(img);
    });
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
      const current = img.currentSrc || img.src;
      const srcA = img.getAttribute("data-src-a") || current;
      const gallery = [srcA, srcA, srcA, srcA].filter(Boolean);
      openLightbox(gallery, img.getAttribute("alt") || "");
    });
  });
}

function initTooltipsInRoot(root) {
  if (typeof bootstrap === "undefined" || !bootstrap.Tooltip) return;
  const nodes =
    root && typeof root.querySelectorAll === "function"
      ? root.querySelectorAll('[data-bs-toggle="tooltip"]')
      : document.querySelectorAll('[data-bs-toggle="tooltip"]');
  nodes.forEach((el) => {
    const existing = bootstrap.Tooltip.getInstance(el);
    if (existing) existing.dispose();
    const useHtml = el.getAttribute("data-bs-html") === "true";
    new bootstrap.Tooltip(el, { html: useHtml, sanitize: false });
  });
}

function initTooltips() {
  initTooltipsInRoot(document);
}

function initStepCompareStep() {
  const openBtn = document.getElementById("step4CompareOpen");
  const leftMount = document.getElementById("stepCompareLeft");
  const rightMount = document.getElementById("stepCompareRight");
  if (!openBtn || !leftMount || !rightMount) return;

  const clonePanel = (panelEl) => {
    const clone = panelEl.cloneNode(true);
    clone.querySelectorAll("[data-hide-in-step-compare]").forEach((n) => n.remove());
    clone.querySelectorAll("[id]").forEach((n) => n.removeAttribute("id"));
    clone.querySelectorAll("button, input, select, textarea, a").forEach((n) => {
      if (n.classList && n.classList.contains("show-price-cta")) return;
      if (n.getAttribute("data-bs-toggle") === "tooltip") return;
      n.setAttribute("tabindex", "-1");
      n.setAttribute("aria-hidden", "true");
      n.classList.add("pointer-events-none");
    });
    return clone;
  };

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const step4Panel = document.querySelector("#checkoutStepPanel4 .panel--step4");
    const step2Panel = document.querySelector("#checkoutStepPanel2 .panel--what-you-get");
    if (!step4Panel || !step2Panel) return;

    leftMount.replaceChildren(clonePanel(step4Panel));
    rightMount.replaceChildren(clonePanel(step2Panel));

    const checkoutForm = document.getElementById("checkoutForm");
    leftMount.querySelectorAll(".show-price-cta").forEach((btn) => {
      btn.removeAttribute("tabindex");
      btn.removeAttribute("aria-hidden");
      btn.classList.remove("pointer-events-none");
      btn.addEventListener("click", (ev) => {
        ev.preventDefault();
        if (checkoutForm && typeof checkoutForm.requestSubmit === "function") {
          checkoutForm.requestSubmit();
        } else if (checkoutForm) {
          checkoutForm.submit();
        }
      });
    });

    initTooltipsInRoot(leftMount);
    initTooltipsInRoot(rightMount);
    try {
      applyShowControlKitFootline();
    } catch (_) {
      // keep compare usable if foot line deps missing
    }

    goToCheckoutStep(5);
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

function initPartnerLogoBar() {
  const bar = document.getElementById("partnerLogoBar");
  const row = document.getElementById("partnerLogoRow");
  if (!bar || !row) return;

  if (!PARTNER_LOGO_BAR.enabled) {
    bar.classList.add("d-none");
    row.replaceChildren();
    return;
  }

  const logos = Array.isArray(PARTNER_LOGO_BAR.logos) ? PARTNER_LOGO_BAR.logos.filter(Boolean) : [];
  if (!logos.length) {
    bar.classList.add("d-none");
    return;
  }

  row.replaceChildren();
  logos.forEach((logo) => {
    if (!logo.src) return;
    const item = document.createElement("div");
    item.className = "partner-logo-bar__item";
    const img = document.createElement("img");
    img.src = logo.src;
    img.alt = logo.alt || "Partner logo";
    img.loading = "lazy";
    item.appendChild(img);
    row.appendChild(item);
  });

  if (row.children.length) bar.classList.remove("d-none");
}

function init() {
  initPartnerLogoBar();
  initLanguageToggle();
  initTooltips();
  initStepCompareStep();
  initTestimonialSwiper();
  initCrowdWays();
  initCalculator();
  initCheckoutFlow();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

