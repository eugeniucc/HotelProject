const modalCallMobile = document.querySelector(".modal_call-mobile");
const modalCallMobileBtn = document.getElementById("header-modal-call-mobile");
const modalCallMobileOverlay = document.querySelector(
  ".modal_call-mobile-overlay"
);
const modalCallMobileInnerBtn = document.querySelector(
  ".modal_call-mobile--btn"
);
const modalCallMobileSend = document.querySelector(
  ".modal_call-mobile--btn--send"
);

modalCallMobileBtn.addEventListener("click", () => {
  modalCallMobile.classList.add("active");
  modalCallMobileOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});

modalCallMobileInnerBtn.addEventListener("click", () => {
  modalCallMobile.classList.remove("active");
  modalCallMobileOverlay.classList.remove("active");
  document.body.classList.remove("noscroll");
});
modalCallMobileOverlay.addEventListener("click", () => {
  modalCallMobile.classList.remove("active");
  modalCallMobileOverlay.classList.remove("active");
  document.body.classList.remove("noscroll");
});
modalCallMobileSend.addEventListener("click", () => {
  setInterval(() => {
    modalCallMobile.classList.remove("active");
    modalCallMobileOverlay.classList.remove("active");
    document.body.classList.remove("noscroll");
  }, 1000);
});

// SECTION DEALS

const dealsCallMobileBtn = document.querySelector(
  ".deals_content-wrapper--btn-mobile"
);

dealsCallMobileBtn.addEventListener("click", () => {
  modalCallMobile.classList.add("active");
  modalCallMobileOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});

// SECTION CATALOG

const catalogCallMobileBtn = document.querySelector(
  ".catalog_wrapper-sign-btn--black"
);
catalogCallMobileBtn.addEventListener("click", () => {
  modalCallMobile.classList.add("active");
  modalCallMobileOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});
