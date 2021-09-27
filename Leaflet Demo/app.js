// To create a basic map in Leaflet Js
var map = L.map('map').setView([19.0759899, 72.8773928], 11);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=mQ0CCTAwmvsVXDOxASms', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

// To add a icon on Map
var leafletIcon = L.icon ({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [12, -90]
})

// To add a marker on Map
var marker = L.marker([19.0759899, 72.8773928], {
    icon: leafletIcon
}).addTo(map);

// To add a cicle in Map
var circle = L.circle([19.1348994, 72.8488199], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: '0.5',
    radius: 1000
}).addTo(map)

// To add a polygon on Map
var polygon = L.polygon([
    [18.921909656029083, 72.83458852767944],
    [18.922757100812152, 72.83390724658966],
    [18.921544289288004, 72.83329033851624]
]).addTo(map)

// To add a Popup message on Map
marker.bindPopup("<h1>MUMBAI</h1><em>MUMBAI the city of dreams</em>").openPopup();
circle.bindPopup("<h1>JOGESHWARI</h1><em>My Hometown</em>")
polygon.bindPopup("<h1>CHURCHGATE</h1><em>Gateway of India</em>")