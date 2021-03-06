'use strict'

let gPlaces;
const PLACES_KEY = 'PLACES'
console.log('gPlaces: ', gPlaces);


function creatPlaces() {
    let places = loadFromStorage(PLACES_KEY)
    if (!places) {
        places = []
    }
    gPlaces = places
    _savePlaces()
}



function creatPlace(loc, name) {
    let place = {
        id: makeId(),
        lat: loc.lat(),
        lng: loc.lng(),
        name
    }
    return place
}
// localStorage.clear()

function addPlace(loc) {
    let name = prompt('Type the name of the place')
    let place = creatPlace(loc, name)
    gPlaces.push(place)
    // _savePlaces()
    console.log('gPlaces: ', gPlaces);
    renderPlaces()
    _savePlaces()
}




function getPlacesForDisplay() {
    return gPlaces
}

// function getPlaceIdxById(placeId) {
//     return gPlaces.findIndex(place => placeId === place.id)
// }

function removePlace(event, placeId) {
    var placeIdx = gPlaces.findIndex(function(place){
        console.log(placeId, place.id);
        return placeId === place.id
        
    })
    console.log(gPlaces);
    gPlaces.splice(placeIdx, 1)
    console.log(gPlaces);
    
    _savePlaces()
}

function _savePlaces() {
    
    saveToStorage(PLACES_KEY, gPlaces)
}