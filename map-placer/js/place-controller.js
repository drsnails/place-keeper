'use strict'

let gMap;


function initMap(lat = 29.5577, lng = 34.9519) {
    //            if (!lat) lat = 32.0749831;
    //            if (!lng) lat = 34.9120554;
    var elMap = document.querySelector('#map');
    var options = {
        center: { lat, lng },
        zoom: 8
    };

    var map = new google.maps.Map(
        elMap,
        options
    );

    var marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: 'Hello World!'
    });


    map.addListener('click', function(e) {
        console.log(e.latLng.lng());
        placeMarkerAndPanTo(e.latLng, map);
      });


}

function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    // map.panTo(latLng);
}

function getPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }

    // One shot position getting or continus watch
    return navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
    // navigator.geolocation.watchPosition(showLocation, handleLocationError);
}

function showLocation(position) {
    console.log(position);


    initMap(position.coords.latitude, position.coords.longitude);
}

function handleLocationError(error) {
    return
}


