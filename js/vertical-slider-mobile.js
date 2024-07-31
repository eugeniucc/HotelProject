// VERTICAL SLIDER NO TEXT
const showSliderVerticalMobile = document.querySelector(
  ".vertical_slider-mobile"
);
const closeSliderVerticalMobile = document.querySelector(
  ".close_vertical-slider--mobile"
);

closeSliderVerticalMobile.addEventListener("click", () => {
  showSliderVerticalMobile.classList.remove("active");
  closeSliderVerticalMobile.classList.remove("active");
});

// VERTICAL SLIDER SHOW NO TEXT

const showVerticalMobile = document.getElementById("show-vertical-mobile");

showVerticalMobile.addEventListener("click", () => {
  showSliderVerticalMobile.classList.add("active");
  closeSliderVerticalMobile.classList.add("active");
});

const showVerticalInteriorMobile = document.querySelector(
  ".interior-vertical-slider-mobile"
);
showVerticalInteriorMobile.addEventListener("click", () => {
  showSliderVerticalMobile.classList.add("active");
  closeSliderVerticalMobile.classList.add("active");
});

// VERTICAL SLIDER WITH TEXT
const showSliderVerticalText = document.querySelector(".vertical_slider-text");
const closeSliderVerticalText = document.querySelector(
  ".close_vertical-slider--text"
);

closeSliderVerticalText.addEventListener("click", () => {
  showSliderVerticalText.classList.remove("active");
  closeSliderVerticalText.classList.remove("active");
});

// VERTICAL SLIDER WITH TEXT SECTION AREA

const areaBtnShowVertical = document.querySelector(".area-vertical-show");

areaBtnShowVertical.addEventListener("click", () => {
  showSliderVerticalText.classList.add("active");
  closeSliderVerticalText.classList.add("active");
});
