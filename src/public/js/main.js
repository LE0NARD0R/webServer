
const map = L.map('map-template'). setView([10.9886091, -74.7922088], 13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

