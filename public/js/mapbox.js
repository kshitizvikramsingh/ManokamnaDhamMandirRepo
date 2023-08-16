
 console.log("script is loaded")
 mapboxgl.accessToken = 'pk.eyJ1Ijoia3NoaXRpejIxMDQiLCJhIjoiY2xsY3F5cnltMDNvNDNjdGo4OXNxYjc1cSJ9.B6G-l78V8Ag076eGaroswQ';
 const map = new mapboxgl.Map({
 container: 'mapped', // container ID
 style: 'mapbox://styles/mapbox/streets-v12', // style URL
 center: [-74.5, 40], // starting position [lng, lat]
 zoom: 9, // starting zoom
 });