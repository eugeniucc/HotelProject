// HEADER SWIPER

var swiper = new Swiper(".header-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ABOUT SWIPER

var swiper = new Swiper(".swiper-about", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// AROUND SWIPER
var swiper = new Swiper(".around-swiper", {
  freeMode: true,
  centeredSlides: true,
  slidesPerView: 4,
  spaceBetween: 24,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 14,
    },
    700: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    880: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

// GALERY BOX MOBILE ARCH

var swiper = new Swiper(".galery_box-mobile-arch", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

// GALERY BOX MOBILE INSIDE

var swiper = new Swiper(".galery_box-mobile-inside", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

// INTERIOR MOBILE

var swiper = new Swiper(".structure-swiper-mobile", {
  slidesPerView: 1,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

// AROUND SWIPER MOBILE

var swiper = new Swiper(".around-swiper-mobile", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

// VERTICAL SWIPER DESKTOP

var swiper = new Swiper(".swiper-vertical-desktop", {
  direction: "vertical",
  freeMode: true,
  slidesPerView: 1,
  spaceBetween: 24,
  mousewheel: {
    invert: false,
  },
  freeModeSticky: true,
});

// VERTICAL SLIDER MOBILE

var swiper = new Swiper(".swiper-vertical-mobile", {
  direction: "vertical",
  freeMode: true,
  slidesPerView: 1,
  spaceBetween: 20,
  mousewheel: {
    invert: false,
  },
  loop: false,
});

// VERTICAL SLIDER TEXT

var swiper = new Swiper(".swiper-vertical-text", {
  direction: "vertical",
  freeMode: true,
  slidesPerView: 1,
  spaceBetween: 20,
  mousewheel: {
    invert: false,
  },
  initialSlide: 0,
});
