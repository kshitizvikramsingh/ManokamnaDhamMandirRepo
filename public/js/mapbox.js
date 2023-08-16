


 console.log("script is loaded")
 //mapboxgl.accessToken = 'pk.eyJ1Ijoia3NoaXRpejIxMDQiLCJhIjoiY2xsY3F5cnltMDNvNDNjdGo4OXNxYjc1cSJ9.B6G-l78V8Ag076eGaroswQ';
//  const map = new mapboxgl.Map({
//  container: 'map', // container ID
//  style: 'mapbox://styles/mapbox/dark-v11', // style URL
//  center: [ 77.4771321,28.7145463 ], // starting position [lng, lat]
//  zoom: 16, // starting zoom
//  });

mapboxgl.accessToken = 'pk.eyJ1Ijoia3NoaXRpejIxMDQiLCJhIjoiY2xnMjYwNHpzMDJiNzNubG8xZGszOXdnZyJ9.wd3pEFZuVlguNBkk7NPKiA';
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12',
center: [77.4771321, 28.7145463],
zoom: 13
});
const marker1 = new mapboxgl.Marker()
.setLngLat([77.4771321, 28.7145463])
.addTo(map);
map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-left'
);


// mapboxgl.accessToken = 'pk.eyJ1Ijoia3NoaXRpejIxMDQiLCJhIjoiY2xnMjYwNHpzMDJiNzNubG8xZGszOXdnZyJ9.wd3pEFZuVlguNBkk7NPKiA';
// const map = new mapboxgl.Map({
// container: 'map',
// // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
// style: 'mapbox://styles/mapbox/streets-v12',
// center: [77.4771321, 28.7145463],
// zoom: 14
// });
 
// map.on('load', () => {
// // Add an image to use as a custom marker
// map.loadImage(
// 'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
// (error, image) => {
// if (error) throw error;
// map.addImage('custom-marker', image);
// // Add a GeoJSON source with 2 points
// map.addSource('points', {
// 'type': 'geojson',
// 'data': {
// 'type': 'FeatureCollection',
// 'features': [
// {
// // feature for Mapbox DC
// 'type': 'Feature',
// 'geometry': {
// 'type': 'Point',
// 'coordinates': [
//     77.4771321, 28.7145463
// ]
// },
// 'properties': {
// 'title': 'Mapbox Gzb'
// }
// }
// ]
// }
// });
 
// // Add a symbol layer
// map.addLayer({
// 'id': 'points',
// 'type': 'symbol',
// 'source': 'points',
// 'layout': {
// 'icon-image': 'custom-marker',
// // get the title name from the source's "title" property
// 'text-field': ['get', 'title'],
// 'text-font': [
// 'Open Sans Semibold',
// 'Arial Unicode MS Bold'
// ],
// 'text-offset': [0, 1.25],
// 'text-anchor': 'top'
// }
// });
// }
// );
// });
 