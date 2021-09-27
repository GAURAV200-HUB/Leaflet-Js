// To create a basic map in Leaflet Js
var map = L.map('map').setView([19.0759899, 72.8773928], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ2F1cmF2MjAwLWh1YiIsImEiOiJja3UyampkOWkycDZ0Mndtcm5mdHczbncyIn0.UEIXrKw3dRpMn4FUreJDyw'
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

// To add different icons with same propertiy on different position of Map

// var LeafletIcon = L.Icon.extend({
//     options: {
//         shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
//         iconSize: [38, 95],
//         shadowSize: [50, 64],
//         iconAnchor: [22, 94],
//         shadowAnchor: [4, 62],
//         popupAnchor: [12, -90]
//     }
// })

// var greenIcon = new LeafletIcon({
//     iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png'
// }),
//     redIcon = new LeafletIcon({
//         iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png'
//     }),
//     orangeIcon = new LeafletIcon({
//         iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png'
//     })

// var marker = L.marker([19.208279068210725, 72.81103841754909], {
//     icon: greenIcon,
//     title: 'Vihar Lake'
// }).addTo(map);

// var marker = L.marker([19.222624716152872, 72.86914579364772], {
//     icon: redIcon
// }).addTo(map);

// var marker = L.marker([19.22011229197666, 72.91146032306666], {
//     icon: orangeIcon
// }).addTo(map);

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

const rectangle = L.rectangle();