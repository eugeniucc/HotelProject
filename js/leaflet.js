var map = L.map("map").setView([36.512631, -4.827386], 15);

// https://leaflet-extras.github.io/leaflet-providers/preview/#filter=Stadia.AlidadeSmooth
var apiKey = "280a0718-80a0-44d7-82b1-1dc7bd42d9bd";

var Stadia_AlidadeSmooth = L.tileLayer(
  `https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}?api_key=${apiKey}`,
  {
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: "png",
  }
).addTo(map);

// CUSTOM PIN

var greenIcon = L.icon({
  iconUrl: "./icons/house-map.svg",
  iconSize: [24, 24],
});

L.marker([36.512631, -4.827386], { icon: greenIcon }).addTo(map);
