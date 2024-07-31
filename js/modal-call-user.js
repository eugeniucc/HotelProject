const modalCall = document.querySelector(".modal_call");
const modalOverlay = document.querySelector(".modal_call-overlay");
const modalShowBtn = document.querySelector('[data-menu="modal_call-desktop"]');
const modalShowBtnSecond = document.querySelector(
  '[data-menu="modal_call-desktop-second"]'
);
const modalCloseInnerBtn = document.querySelector(".modal_call-btn");
const modalSendBtn = document.querySelector(".modal_call-btn--send");
const modalSectionDeals = document.querySelector(".deals_content-wrapper--btn");
const modalCallFooter = document.getElementById("footer-modal-call");
const modalCallCatalog = document.querySelector(
  '[data-menu="call-form-catalog"]'
);

modalShowBtn.addEventListener("click", () => {
  modalCall.classList.add("active");
  modalOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});
modalShowBtnSecond.addEventListener("click", () => {
  modalCall.classList.add("active");
  modalOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});

modalCloseInnerBtn.addEventListener("click", () => {
  modalCall.classList.remove("active");
  modalOverlay.classList.remove("active");
  document.body.classList.remove("noscroll");
});

modalOverlay.addEventListener("click", () => {
  modalCall.classList.remove("active");
  modalOverlay.classList.remove("active");
  document.body.classList.remove("noscroll");
});

modalSendBtn.addEventListener("click", () => {
  setTimeout(() => {
    modalCall.classList.remove("active");
    modalOverlay.classList.remove("active");
  }, 1000);
  document.body.classList.remove("noscroll");
});

modalSectionDeals.addEventListener("click", () => {
  modalCall.classList.add("active");
  document.body.classList.add("noscroll");
  modalOverlay.classList.add("active");
});

modalCallFooter.addEventListener("click", () => {
  modalCall.classList.add("active");
  document.body.classList.add("noscroll");
  modalOverlay.classList.add("active");
});

modalCallCatalog.addEventListener("click", () => {
  modalCall.classList.add("active");
  document.body.classList.add("noscroll");
  modalOverlay.classList.add("active");
});
