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

const outputs = {
  pricePerGuest: document.getElementById("pricePerGuest"),
};

function toMoney(value) {
  return Number(value).toFixed(2);
}

function formatEURNumber(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "0,00";
  return new Intl.NumberFormat("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
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
      const multType = el.getAttribute("data-mult");
      const mult = multType === "shows" ? shows : multType === "guests" ? guests : 1;
      const value = base * mult;
      total += value;
      el.textContent = formatEURNumber(value);
    });
    totalValueEl.textContent = formatEURNumber(total);
  }

  // Pro card display: 5000 / guests (per guest)
  if (proExperiencePrice) {
    const perGuest = guests > 0 ? 5000 / guests : 0;
    proExperiencePrice.textContent = `+€${formatEURNumber(perGuest)} per guest`;
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
  if (outputs.pricePerGuest) outputs.pricePerGuest.textContent = formatEURNumber(data.cost_per_guest);
  if (showPriceTodayEl) showPriceTodayEl.textContent = formatEURNumber(data.total_cost);
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
    if (uploadText) uploadText.textContent = "[Upload]";
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
      if (!bandPink.checked) {
        bandPink.checked = true;
      }
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

  // On first load, enforce correct state
  if (bandPink.checked) requireUpload();
  else clearUpload();

  // Prevent submit if pink selected but no file
  const form = document.getElementById("checkoutForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      if (bandPink.checked && !(wristbandUpload.files && wristbandUpload.files.length)) {
        e.preventDefault();
        wristbandUpload.focus();
        alert("Please upload an image to continue.");
      }
    });
  }
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
wireWristbandUpload();

// Newsletter (footer)
const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
if (newsletterForm && newsletterEmail) {
  newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = (newsletterEmail.value || "").trim();
    if (!email) return;

    const body = new URLSearchParams({ email });
    const res = await fetch("/api/newsletter/subscribe/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });

    if (res.ok) {
      newsletterEmail.value = "";
      alert("Thanks! You're subscribed.");
    } else {
      alert("Sorry, something went wrong. Please try again.");
    }
  });
}

// Payment success/cancel banner (Stripe redirect)
const paymentAlertWrap = document.getElementById("paymentAlertWrap");
const paymentAlert = document.getElementById("paymentAlert");
if (paymentAlertWrap && paymentAlert) {
  const params = new URLSearchParams(window.location.search);
  const paid = params.get("paid");

  const showBanner = (type, msg) => {
    paymentAlert.className = `alert mb-0 alert-${type}`;
    paymentAlert.textContent = msg;
    paymentAlertWrap.classList.remove("d-none");
    window.setTimeout(() => paymentAlertWrap.classList.add("d-none"), 8000);
  };

  if (paid === "success") {
    showBanner("success", "Payment successful. Your order is confirmed.");
  } else if (paid === "cancel") {
    showBanner("warning", "Payment was cancelled. You can try again anytime.");
  }
}

// Bootstrap tooltips
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
  // eslint-disable-next-line no-undef
  new bootstrap.Tooltip(el);
});

// Testimonial swiper
if (typeof Swiper !== "undefined" && document.querySelector(".testimonial-swiper")) {
  // eslint-disable-next-line no-undef
  new Swiper(".testimonial-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev",
    },
  });
}
