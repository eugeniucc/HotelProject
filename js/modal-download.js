// MODAL BTNS

const backBtn = document.querySelector(".modal_download-back");
const showModalInner = document.querySelector(
  ".modal_download-top--secondform"
);
const modalTop = document.querySelector(".modal_download-top");
const modalInner = document.querySelector(".modal_download-inner");

const modalDownload = document.querySelector(".modal_download");
const modalCloseBtn = document.querySelector(".modal_download-btn");

const modalDownloadSend = document.querySelector(".modal_download-btn--send");

showModalInner.addEventListener("click", () => {
  modalTop.classList.add("hide");
  modalInner.classList.add("active");
  backBtn.classList.add("show");
});

backBtn.addEventListener("click", () => {
  backBtn.classList.remove("show");
  modalTop.classList.remove("hide");
  modalInner.classList.remove("active");
});

modalCloseBtn.addEventListener("click", () => {
  modalDownload.classList.remove("active");
  modalDownloadOverlay.classList.remove("active");
  document.body.classList.remove("noscroll");
});

modalDownloadSend.addEventListener("click", () => {
  setTimeout(() => {
    modalDownload.classList.remove("active");
    modalDownloadOverlay.classList.remove("active");
    document.body.classList.remove("noscroll");
  }, 1000);
});

// SECTION HEADEAR SHOW MODAL DOWNLOAD

const headerBtnShow = document.querySelector('[data-modal="modal-download"]');
const headerBtnShowSecond = document.querySelector(
  '[data-modal="modal-download-second"]'
);
const modalDownloadOverlay = document.querySelector(".modal_download-overlay");

headerBtnShow.addEventListener("click", () => {
  modalDownload.classList.add("active");
  modalDownloadOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});
headerBtnShowSecond.addEventListener("click", () => {
  modalDownload.classList.add("active");
  modalDownloadOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});
modalDownloadOverlay.addEventListener("click", () => {
  modalDownload.classList.remove("active");
  modalDownloadOverlay.classList.remove("active");
  document.body.classList.remove("noscroll");
});

// SECTION GALERY SHOW MODAL DOWNLOAD

const modalDownloadGalery = document.getElementById("galery-show-download");

modalDownloadGalery.addEventListener("click", () => {
  modalDownload.classList.add("active");
  modalDownloadOverlay.classList.add("active");
});

// SECTION CATALOG SHOW MODAL DONWLOAD

const modalDownloadCatalog = document.getElementById("catalog-show-download");

modalDownloadCatalog.addEventListener("click", () => {
  modalDownload.classList.add("active");
  modalDownloadOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});
const modalDownloadCatalogMobile = document.getElementById(
  "catalog-show-download-mobile"
);

modalDownloadCatalogMobile.addEventListener("click", () => {
  modalDownload.classList.add("active");
  modalDownloadOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});

const modalDownloadCatalogTablet = document.querySelector(
  ".galery_view-content--all"
);

modalDownloadCatalogTablet.addEventListener("click", () => {
  modalDownload.classList.add("active");
  modalDownloadOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});

// SECTION GALERY

const galeryShowModalDownload = document.querySelector(
  "#show-modal-desktop-galery-download"
);

galeryShowModalDownload.addEventListener("click", () => {
  modalDownload.classList.add("active");
  modalDownloadOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});

// SECTION FORMS

const formsShowModalDownloadNew = document.getElementById(
  "forms_wrapper-btn-new"
);
const formsShowModalDownloadReady = document.getElementById(
  "forms_wrapper-btn-ready"
);

formsShowModalDownloadNew.addEventListener("click", () => {
  modalDownload.classList.add("active");
  modalDownloadOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});

formsShowModalDownloadReady.addEventListener("click", () => {
  modalDownload.classList.add("active");
  modalDownloadOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});

// SECTION FORMS MOBILE

const formsMobileModalDownload = document.getElementById(
  "forms_wrapper-btn-mobile-all"
);

formsMobileModalDownload.addEventListener("click", () => {
  modalDownload.classList.add("active");
  modalDownloadOverlay.classList.add("active");
  document.body.classList.add("noscroll");
});
