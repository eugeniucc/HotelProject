const showSliderVertical = document.querySelector(".vertical_slider-desktop");
const closeSliderVertical = document.querySelector(
  ".close_vertical-slider--desktop"
);

closeSliderVertical.addEventListener("click", () => {
  showSliderVertical.classList.remove("active");
  closeSliderVertical.classList.remove("active");
});

// SECTION GALERY

const showSliderVerticalGalery = document.querySelector(
  ".galery_view-content--all-vertical"
);

showSliderVerticalGalery.addEventListener("click", () => {
  showSliderVertical.classList.add("active");
  closeSliderVertical.classList.add("active");
});

// SECTION GALERY TABLET

const showSliderVerticalTablet = document.getElementById("all-vertical");

showSliderVerticalTablet.addEventListener("click", () => {
  showSliderVertical.classList.add("active");
  closeSliderVertical.classList.add("active");
});

// SECTION INTERIOR

const showVerticalInterior = document.getElementById("show-vertical-interior");

showVerticalInterior.addEventListener("click", () => {
  showSliderVertical.classList.add("active");
  closeSliderVertical.classList.add("active");
});
