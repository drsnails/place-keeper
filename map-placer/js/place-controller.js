'use strict'

// let gMap;

// function initMap(lat=29.5577, lng=34.9519) {
//     //            if (!lat) lat = 32.0749831;
//     //            if (!lng) lat = 34.9120554;
//     const elMap = document.querySelector('#map');
//     var options = {
//         center: { lat, lng },
//         zoom: 10
//     };

//     gMap = new google.maps.Map(
//         elMap,
//         options
//     );

//     var marker = new google.maps.Marker({
//         position: { lat, lng },
//         map: gMap,
//         title: 'Hello World!'
//     });
// }

// initMap(29.5577, 34.9519)


// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}