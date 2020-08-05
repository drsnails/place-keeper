'use strict'

let gMap;
let gUserLocation = {}


function initPlaces() {
    creatPlaces()
    renderPlaces()

}

function initMap(lat = 29.5577, lng = 34.9519) {

    setUserLocation()
    let elFocus = document.querySelector('.focus')

    google.maps.event.addDomListener(elFocus, 'click', function () {
        map.panTo(gUserLocation)
    });
    let elMap = document.querySelector('#map');


    var options = {
        center: { lat, lng },
        zoom: 8,
        disableDefaultUI: true
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


    map.addListener('click', e => {

        onAddPlace(e.latLng, map);
        // getPosition()

    });
}

function renderPlaces() {
    console.log('render places');
    let places = getPlacesForDisplay()
    let strHTMLs = places.map(function (place) {
        return `
        <div class="place">
            <h1>${place.name}</h1>
            <h3>${place.lat.toFixed(2)} ${place.lng.toFixed(2)}</h3>
            <button onclick="onRemovePlace(event, '${place.id}')">x</button>
        </div>
        `
    })
    
    $('.places-sec').html(strHTMLs.join(''))
    
}

function onAddPlace(latLng, map) {
    addPlace(latLng)
}

function onRemovePlace(event, placeId) {
    removePlace(event, placeId)
    console.log(placeId);
    renderPlaces()
    event.stopPropagation
    
}





function setUserLocation() {
    navigator.geolocation.getCurrentPosition(position => {
        gUserLocation.lat = position.coords.latitude
        gUserLocation.lng = position.coords.longitude
    }, handleLocationError)
}

function handleLocationError(error) {
    return 'error'
}

function onFocus() {
    // setUserLocation()
    navigator.geolocation.getCurrentPosition(setUserLocation, handleLocationError)

}
