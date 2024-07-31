// GALERY TABS DESKTOP

const arch = document.querySelector(".galery_tabs-item-arch");
const inside = document.querySelector(".galery_tabs-item-inside");

const archText = document.querySelector(".galery_tabs-item--text-arch");
const insideText = document.querySelector(".galery_tabs-item--text-inside");

const galeryArch = document.getElementById("galery_view-arch");
const galeryInside = document.getElementById("galery_view-inside");

arch.addEventListener("click", () => {
  galeryInside.classList.remove("active");
  galeryArch.classList.remove("hide");
  arch.classList.remove("hide");
  inside.classList.remove("active");
  insideText.style.color = "#C4C4C4";
  archText.style.color = "#302f37";
});

inside.addEventListener("click", () => {
  galeryInside.classList.add("active");
  galeryArch.classList.add("hide");
  inside.classList.add("active");
  arch.classList.add("hide");
  insideText.style.color = "#302f37";
  archText.style.color = "#C4C4C4";
});

// GALERY TABS MOBILE

const boxArch = document.getElementById("galery_box-arch");
const insideArch = document.getElementById("galery_box-inside");

const sliderArch = document.querySelector(".galery_box-mobile-arch");
const sliderInside = document.querySelector(".galery_box-mobile-inside");

boxArch.addEventListener("click", () => {
  boxArch.classList.remove("hide");
  insideArch.classList.remove("active");
  sliderInside.style.display = "none";
  sliderArch.style.display = "block";
});

insideArch.addEventListener("click", () => {
  insideArch.classList.add("active");
  boxArch.classList.add("hide");
  sliderArch.style.display = "none";
  sliderInside.style.display = "block";
});
