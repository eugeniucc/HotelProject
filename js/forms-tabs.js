const newProject = document.getElementById("forms-new");
const readyProject = document.getElementById("forms-ready");
const textProject = document.getElementById("forms-text");
const formBorder = document.querySelector(".forms_content-new-mobile");

newProject.addEventListener("click", () => {
  newProject.classList.remove("forms_active-new");
  readyProject.classList.remove("forms_active-ready");
  textProject.textContent = "Каталог новых проектов в Марбелье";
});

readyProject.addEventListener("click", () => {
  newProject.classList.add("forms_active-new");
  readyProject.classList.add("forms_active-ready");
  textProject.textContent = "Каталог готовых проектов в Марбелье";
});

const footerList = document.getElementById("footer-list");
const footerBox = document.querySelector(".footer_box-content");

footerList.addEventListener("click", () => {
  footerBox.classList.toggle("active");
});
