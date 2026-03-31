/* global bootstrap, Swiper */

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
    proExperiencePrice.textContent = `+€${formatEURNumber(perGuest)} per guest`;
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
        alert("Please upload an image to continue.");
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
      btn.setAttribute("aria-label", playing ? "Pause animation" : "Play animation");
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

