'use strict'

let gMap;

function initMap(lat = 32.032, lng = 32.0303) {
    //            if (!lat) lat = 32.0749831;
    //            if (!lng) lat = 34.9120554;
    const elMap = document.querySelector('#map');
    var options = {
        center: { lat, lng },
        zoom: 16
    };

    gMap = new google.maps.Map(
        elMap,
        options
    );

    var marker = new google.maps.Marker({
        position: { lat, lng },
        map: gMap,
        title: 'Hello World!'
    });
}

initMap(32.0749831, 34.9120554)