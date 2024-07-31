// MODAL BTNS

const backBtnMobile = document.querySelector(".modal_download-mobile-back");
const showModalInnerMobile = document.querySelector(
  ".modal_download-mobile-top--secondform"
);
const modalTopMobile = document.querySelector(".modal_download-mobile-top");
const modalInnerMobile = document.querySelector(".modal_download-mobile-inner");

const modalDownloadMobile = document.querySelector(".modal_download-mobile");
const modalCloseBtnMobile = document.querySelector(
  ".modal_download-mobile-btn"
);

const modalDownloadSendMobile = document.querySelector(
  ".modal_download-mobile-btn--send"
);
const modalDownloadOverlayMobile = document.querySelector(
  ".modal_download-mobile-overlay"
);

showModalInnerMobile.addEventListener("click", () => {
  modalTopMobile.classList.add("hide");
  modalInnerMobile.classList.add("active");
  backBtnMobile.classList.add("show");
});

backBtnMobile.addEventListener("click", () => {
  backBtnMobile.classList.remove("show");
  modalTopMobile.classList.remove("hide");
  modalInnerMobile.classList.remove("active");
});

modalCloseBtnMobile.addEventListener("click", () => {
  modalDownloadMobile.classList.remove("active");
  modalDownloadOverlayMobile.classList.remove("active");
  document.body.classList.remove("noscroll");
});

modalDownloadOverlayMobile.addEventListener("click", () => {
  modalDownloadMobile.classList.remove("active");
  modalDownloadOverlayMobile.classList.remove("active");
  document.body.classList.remove("noscroll");
});

modalDownloadSendMobile.addEventListener("click", () => {
  setTimeout(() => {
    modalDownloadMobile.classList.remove("active");
    modalDownloadOverlayMobile.classList.remove("active");
    document.body.classList.remove("noscroll");
  }, 1000);
});

// SECTION HEADER

const showDownloadMobileBtn = document.getElementById("btn-download-header");

showDownloadMobileBtn.addEventListener("click", () => {
  modalDownloadMobile.classList.add("active");
  modalDownloadOverlayMobile.classList.add("active");
  document.body.classList.add("noscroll");
});

// SECTION GALERY

const showDownloadMobileGalery = document.getElementById("galery-download-btn");

showDownloadMobileGalery.addEventListener("click", () => {
  modalDownloadMobile.classList.add("active");
  modalDownloadOverlayMobile.classList.add("active");
  document.body.classList.add("noscroll");
});

// SECTION CATALOG

const showDownloadMobileCatalog = document.querySelector(
  ".catalog_wrapper-mobile-btn--black"
);

showDownloadMobileCatalog.addEventListener("click", () => {
  modalDownloadMobile.classList.add("active");
  modalDownloadOverlayMobile.classList.add("active");
  document.body.classList.add("noscroll");
});
