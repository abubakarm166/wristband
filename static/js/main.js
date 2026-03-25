const guestsInput = document.getElementById("guests"); // hidden, submitted to backend
const guestsSlider = document.getElementById("guestsSlider"); // UI slider (0..8)
const showsInput = document.getElementById("shows");
const guestsValue = document.getElementById("guestsValue");
const showsValue = document.getElementById("showsValue");
const whiteLabelInput = document.getElementById("whiteLabel");
const customSkinInput = document.getElementById("customSkin");
const deliveryInput = document.getElementById("delivery");
const bandPink = document.getElementById("bandPink");
const deliveryPickup = document.getElementById("deliveryPickup");
const deliveryVenue = document.getElementById("deliveryVenue");
const totalValueEl = document.getElementById("totalValue");
const experienceEssentials = document.getElementById("expEssentials");
const experiencePro = document.getElementById("expPro");
const timing14 = document.getElementById("timing14");
const timing30 = document.getElementById("timing30");
const timing70 = document.getElementById("timing70");

const outputs = {
  wristbandsNeeded: document.getElementById("wristbandsNeeded"),
  costPerBand: document.getElementById("costPerBand"),
  bandCost: document.getElementById("bandCost"),
  transportCost: document.getElementById("transportCost"),
  upsellTotal: document.getElementById("upsellTotal"),
  totalCost: document.getElementById("totalCost"),
  pricePerGuest: document.getElementById("pricePerGuest"),
  revenue: document.getElementById("revenue"),
  marginPercent: document.getElementById("marginPercent"),
};

function toMoney(value) {
  return Number(value).toFixed(2);
}

function setSliderFill(sliderEl) {
  const min = Number(sliderEl.min || 0);
  const max = Number(sliderEl.max || 100);
  const val = Number(sliderEl.value || min);
  const pct = max === min ? 0 : ((val - min) / (max - min)) * 100;
  sliderEl.style.setProperty("--fill", `${pct}%`);
}

function formatInt(n) {
  return new Intl.NumberFormat().format(n);
}

const GUEST_STEPS = [500, 750, 1000, 2500, 5000, 10000, 20000, 40000, 80000];

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
  const guests = parseInt(guestsInput.value || "0", 10);
  const shows = parseInt(showsInput.value || "1", 10);

  if (!guests || !shows || guests < 1 || shows < 1) {
    return;
  }

  if (guestsValue) guestsValue.textContent = formatInt(guests);
  if (showsValue) showsValue.textContent = formatInt(shows);
  if (guestsSlider) setSliderFill(guestsSlider);
  setSliderFill(showsInput);

  // Sync delivery radios -> hidden checkbox used by backend calculator
  if (deliveryVenue && deliveryInput) {
    deliveryInput.checked = deliveryVenue.checked;
  }

  // Wristband "Make it yours" selection -> custom_skin upsell (Excel)
  if (customSkinInput && bandPink) {
    customSkinInput.checked = bandPink.checked;
  }

  // Update "Total Value" list (visual only)
  if (totalValueEl) {
    let total = 0;
    document.querySelectorAll(".feat-cost").forEach((el) => {
      const base = Number(el.getAttribute("data-base") || "0");
      const mult = el.getAttribute("data-mult") === "shows" ? shows : 1;
      const value = base * mult;
      total += value;
      el.textContent = String(value);
    });
    totalValueEl.textContent = toMoney(total);
  }

  const query = new URLSearchParams({
    guests: String(guests),
    shows: String(shows),
    white_label: String(whiteLabelInput.checked),
    custom_skin: String(customSkinInput.checked),
    delivery_to_venue: String(deliveryInput.checked),
    experience: experienceEssentials?.checked ? "essentials" : "pro",
    event_timing: timing14?.checked ? "14" : timing70?.checked ? "70" : "30",
  });

  const response = await fetch(`/api/calculate/?${query.toString()}`);
  if (!response.ok) {
    return;
  }
  const data = await response.json();
  outputs.wristbandsNeeded.textContent = data.wristbands_needed;
  outputs.costPerBand.textContent = toMoney(data.cost_per_band);
  outputs.bandCost.textContent = toMoney(data.band_cost);
  outputs.transportCost.textContent = toMoney(data.transport_cost);
  outputs.upsellTotal.textContent = toMoney(data.upsell_total);
  outputs.totalCost.textContent = toMoney(data.total_cost);
  outputs.pricePerGuest.textContent = toMoney(data.cost_per_guest);
}

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

// Bootstrap tooltips
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
  // eslint-disable-next-line no-undef
  new bootstrap.Tooltip(el);
});
