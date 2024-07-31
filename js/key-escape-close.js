window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // MENU FROM RIGHT
    headerMenu.classList.remove("active");
    document.body.classList.remove("noscroll");
    headerOverlay.classList.remove("active");
    // MODAL CALL USER
    modalCall.classList.remove("active");
    modalOverlay.classList.remove("active");
    // MODAL DOWNLOAD USER
    modalDownload.classList.remove("active");
    modalDownloadOverlay.classList.remove("active");
  }
});
