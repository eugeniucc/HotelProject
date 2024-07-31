// SPLIDE PLANS

var splidePlans = new Splide(".splide");
var barPlans = splidePlans.root.querySelector(".my-slider-progress-bar");

splidePlans.on("mounted move", function () {
  var end = splidePlans.Components.Controller.getEnd() + 1;
  barPlans.style.width = String((100 * (splidePlans.index + 1)) / end) + "%";
});

splidePlans.mount();

// SPLIDE EXCLUSIVE

var splideExclusive = new Splide(".splide-exclusive");
var barExclusive = splideExclusive.root.querySelector(
  ".my-slider-progress-bar-exclusive"
);

splideExclusive.on("mounted move", function () {
  var end = splideExclusive.Components.Controller.getEnd() + 1;
  barExclusive.style.width =
    String((100 * (splideExclusive.index + 1)) / end) + "%";
});

splideExclusive.mount();
