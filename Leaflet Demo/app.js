// To create a basic map in Leaflet Js
var map = L.map('map').setView([21.125681, 82.79499799999996], 5);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=mQ0CCTAwmvsVXDOxASms', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

// To add a marker in Map
var marker = L.marker([19.0759899, 72.8773928]).addTo(map);

// To add a cicle in Map