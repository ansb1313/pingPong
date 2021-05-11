var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5zYjEzMTMiLCJhIjoiY2tvamxnZTM2MWR1ODJ1cDF3azc3cDBqbyJ9.EULYPe-SkyiLGS_xTfb_dA';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v11'
});