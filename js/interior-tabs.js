const interiorItem = document.querySelectorAll(".interior_tabs-list--text");
const firstItem = document.getElementById("first-interior-tab");

const arrList = Array.from(interiorItem);

arrList.forEach((el) => {
  el.addEventListener("click", () => {
    arrList.forEach((item) => item.classList.remove("active"));
    el.classList.add("active");
    firstItem.classList.add("remove");
    if (firstItem.classList.contains("active")) {
      firstItem.classList.remove("remove");
    }
  });
});

const livingItem = document.getElementById("living-item");
const livingWrapper = document.getElementById("living");

const kitchenItem = document.getElementById("kitchen-item");
const kitchenWrapper = document.getElementById("kitchen");

const bedroomItem = document.getElementById("bedroom-item");
const bedroomWrapper = document.getElementById("bedroom");

const bathroomItem = document.getElementById("bathroom-item");
const bathroomWrapper = document.getElementById("bathroom");

function hideAllWrappers() {
  livingWrapper.style.display = "none";
  kitchenWrapper.style.display = "none";
  bedroomWrapper.style.display = "none";
  bathroomWrapper.style.display = "none";
}

livingItem.addEventListener("click", () => {
  hideAllWrappers();
  livingWrapper.style.display = "flex";
});
kitchenItem.addEventListener("click", () => {
  hideAllWrappers();
  kitchenWrapper.style.display = "flex";
});
bedroomItem.addEventListener("click", () => {
  hideAllWrappers();
  bedroomWrapper.style.display = "flex";
});
bathroomItem.addEventListener("click", () => {
  hideAllWrappers();
  bathroomWrapper.style.display = "flex";
});
