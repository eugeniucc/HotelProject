// DESKTOP

const headerBtn = document.querySelector('[data-menu="desktop-menu"]');
const headerBtnSecond = document.querySelector(
  '[data-menu="desktop-menu-second"]'
);
const headerMenu = document.querySelector(".menu_desktop");
const closeMenu = document.querySelector(".menu_desktop-close");
const headerOverlay = document.querySelector(".menu_desktop-overlay");

headerBtn.addEventListener("click", () => {
  headerMenu.classList.add("active");
  document.body.classList.add("noscroll");
  headerOverlay.classList.add("active");
});
headerBtnSecond.addEventListener("click", () => {
  headerMenu.classList.add("active");
  document.body.classList.add("noscroll");
  headerOverlay.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  headerMenu.classList.remove("active");
  document.body.classList.remove("noscroll");
  headerOverlay.classList.remove("active");
});
headerOverlay.addEventListener("click", () => {
  headerMenu.classList.remove("active");
  document.body.classList.remove("noscroll");
  headerOverlay.classList.remove("active");
});

function closeDesktopMenu() {
  headerMenu.classList.remove("active");
  document.body.classList.remove("noscroll");
  headerOverlay.classList.remove("active");
}

const desktopList = document.querySelectorAll(".menu_desktop-list--link");
const desktopListArr = Array.from(desktopList);

desktopListArr.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = el.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({});
    closeDesktopMenu();
  });
});

// MOBILE

const headerMobileBtn = document.getElementById("header_mobile-menu");
const headerMenuMobile = document.querySelector("#menu_mobile");
const headerMobileLinks = document.querySelectorAll(".menu_mobile-list--link");

const arrMobileLinks = Array.from(headerMobileLinks);

headerMobileBtn.addEventListener("click", () => {
  if (headerMenuMobile.classList.contains("hidden")) {
    headerMenuMobile.classList.remove("hidden");
    requestAnimationFrame(() => {
      headerMenuMobile.style.maxHeight = headerMenuMobile.scrollHeight + "px";
    });
  } else {
    headerMenuMobile.style.maxHeight = headerMenuMobile.scrollHeight + "px";
    requestAnimationFrame(() => {
      headerMenuMobile.style.maxHeight = "0";
    });
    headerMenuMobile.addEventListener(
      "transitionend",
      () => {
        headerMenuMobile.classList.add("hidden");
      },
      {
        once: true,
      }
    );
  }
});

arrMobileLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    const elHref = el.getAttribute("href").substring(1);
    const toSection = document.getElementById(elHref);
    toSection.scrollIntoView({});
    headerMenuMobile.classList.remove("active");
  });
});

const dotsMobile = document.querySelector(".dots_mobile");

dotsMobile.addEventListener("click", () => {
  dotsMobile.classList.toggle("active");
});
