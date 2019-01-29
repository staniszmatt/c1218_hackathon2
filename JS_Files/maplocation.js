function initMap() {
  var origin = {lat: 34.871, lng: -117.197};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: origin
  });
  var clickHandler = new ClickEventHandler(map, origin);
}

/**
 * @constructor
 */
var ClickEventHandler = function(map, origin) {
  this.origin = origin;
  this.map = map;
  this.directionsService = new google.maps.DirectionsService;
  this.directionsDisplay = new google.maps.DirectionsRenderer;
  this.directionsDisplay.setMap(map);
  this.placesService = new google.maps.places.PlacesService(map);
  this.infowindow = new google.maps.InfoWindow;
  this.infowindowContent = document.getElementById('infowindow-content');
  this.infowindow.setContent(this.infowindowContent);

  // Listen for clicks on the map.
  this.map.addListener('click', this.handleClick.bind(this));
};

ClickEventHandler.prototype.handleClick = function(event) {
  console.log('You clicked on: ' + event.latLng);
  // If the event has a placeId, use it.
  if (event.placeId) {
    console.log('You clicked on place:' + event.placeId);

    // Calling e.stop() on the event prevents the default info window from
    // showing.
    // If you call stop here when there is no placeId you will prevent some
    // other map click event handlers from receiving the event.
    event.stop();
    this.calculateAndDisplayRoute(event.placeId);
    this.getPlaceInformation(event.placeId);
  }
};
function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}

ClickEventHandler.prototype.calculateAndDisplayRoute = function(placeId) {
  var me = this;
  this.directionsService.route({
    origin: this.origin,
    destination: {placeId: placeId},
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      me.directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
};

ClickEventHandler.prototype.getPlaceInformation = function(placeId) {
  var me = this;
  this.placesService.getDetails({placeId: placeId}, function(place, status) {
    if (status === 'OK') {
      me.infowindow.close();
      me.infowindow.setPosition(place.geometry.location);
      me.infowindowContent.children['place-icon'].src = place.icon;
      me.infowindowContent.children['place-name'].textContent = place.name;
      me.infowindowContent.children['place-id'].textContent = place.place_id;
      me.infowindowContent.children['place-address'].textContent =
          place.formatted_address;
      me.infowindow.open(me.map);
    }
  });
};

// var map;

//       function initMap() {
//         // Create the map.
//         var pyrmont = {lat: 33.640, lng: -117.741};
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: pyrmont,
//           zoom: 8
//         });
//         var clickHandler = new ClickEventHandler(map, origin);

//         // Create the places service.
//         var service = new google.maps.places.PlacesService(map);
//         var getNextPage = null;
//         var moreButton = document.getElementById('more');
//         moreButton.onclick = function() {
//           moreButton.disabled = true;
//           if (getNextPage) getNextPage();
//         };

//         // Perform a nearby search.
//         service.nearbySearch(
//             {location: pyrmont, radius: 16000, type: ['store']},
//             function(results, status, pagination) {
//               if (status !== 'OK') return;

//               createMarkers(results);
//               moreButton.disabled = !pagination.hasNextPage;
//               getNextPage = pagination.hasNextPage && function() {
//                 pagination.nextPage();
//               };
//             });
//       }

//       function createMarkers(places) {
//         var bounds = new google.maps.LatLngBounds();
//         var placesList = document.getElementById('places');

//         for (var i = 0, place; place = places[i]; i++) {
//           var image = {
//             url: place.icon,
//             size: new google.maps.Size(71, 71),
//             origin: new google.maps.Point(0, 0),
//             anchor: new google.maps.Point(17, 34),
//             scaledSize: new google.maps.Size(25, 25)
//           };

//           var marker = new google.maps.Marker({
//             map: map,
//             icon: image,
//             title: place.name,
//             position: place.geometry.location
//           });

//           var li = document.createElement('li');
//           li.textContent = place.name;
//           placesList.appendChild(li);

//           bounds.extend(place.geometry.location);
//         }
//         map.fitBounds(bounds);
//       }

// function AutocompleteDirectionsHandler(map) {
//   this.map = map;
//   this.originPlaceId = null;
//   this.destinationPlaceId = null;
//   this.travelMode = 'WALKING';
//   var originInput = document.getElementById('origin-input');
//   var destinationInput = document.getElementById('destination-input');
//   var modeSelector = document.getElementById('mode-selector');
//   this.directionsService = new google.maps.DirectionsService;
//   this.directionsDisplay = new google.maps.DirectionsRenderer;
//   this.directionsDisplay.setMap(map);

//   var originAutocomplete = new google.maps.places.Autocomplete(
//       originInput, {placeIdOnly: true});
//   var destinationAutocomplete = new google.maps.places.Autocomplete(
//       destinationInput, {placeIdOnly: true});

//   this.setupClickListener('changemode-walking', 'WALKING');
//   this.setupClickListener('changemode-transit', 'TRANSIT');
//   this.setupClickListener('changemode-driving', 'DRIVING');

//   this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
//   this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

//   this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
//   this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
//   this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
// }

// // Sets a listener on a radio button to change the filter type on Places
// // Autocomplete.
// AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
//   var radioButton = document.getElementById(id);
//   var me = this;
//   radioButton.addEventListener('click', function() {
//     me.travelMode = mode;
//     me.route();
//   });
// };

// AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
//   var me = this;
//   autocomplete.bindTo('bounds', this.map);
//   autocomplete.addListener('place_changed', function() {
//     var place = autocomplete.getPlace();
//     if (!place.place_id) {
//       window.alert("Please select an option from the dropdown list.");
//       return;
//     }
//     if (mode === 'ORIG') {
//       me.originPlaceId = place.place_id;
//     } else {
//       me.destinationPlaceId = place.place_id;
//     }
//     me.route();
//   });

// };

// AutocompleteDirectionsHandler.prototype.route = function() {
//   if (!this.originPlaceId || !this.destinationPlaceId) {
//     return;
//   }
//   var me = this;

//   this.directionsService.route({
//     origin: {'placeId': this.originPlaceId},
//     destination: {'placeId': this.destinationPlaceId},
//     travelMode: this.travelMode
//   }, function(response, status) {
//     if (status === 'OK') {
//       me.directionsDisplay.setDirections(response);
//     } else {
//       window.alert('Directions request failed due to ' + status);
//     }
//   });
// };
// var ClickEventHandler = function(map, origin) {
//   this.origin = origin;
//   this.map = map;
//   this.directionsService = new google.maps.DirectionsService;
//   this.directionsDisplay = new google.maps.DirectionsRenderer;
//   this.directionsDisplay.setMap(map);
//   this.placesService = new google.maps.places.PlacesService(map);
//   this.infowindow = new google.maps.InfoWindow;
//   this.infowindowContent = document.getElementById('infowindow-content');
//   this.infowindow.setContent(this.infowindowContent);

//   // Listen for clicks on the map.
//   this.map.addListener('click', this.handleClick.bind(this));
// };

// ClickEventHandler.prototype.handleClick = function(event) {
//   console.log('You clicked on: ' + event.latLng);
//   // If the event has a placeId, use it.
//   if (event.placeId) {
//     console.log('You clicked on place:' + event.placeId);

//     // Calling e.stop() on the event prevents the default info window from
//     // showing.
//     // If you call stop here when there is no placeId you will prevent some
//     // other map click event handlers from receiving the event.
//     event.stop();
//     this.calculateAndDisplayRoute(event.placeId);
//     this.getPlaceInformation(event.placeId);
//   }
// };

// ClickEventHandler.prototype.calculateAndDisplayRoute = function(placeId) {
//   var me = this;
//   this.directionsService.route({
//     origin: this.origin,
//     destination: {placeId: placeId},
//     travelMode: 'WALKING'
//   }, function(response, status) {
//     if (status === 'OK') {
//       me.directionsDisplay.setDirections(response);
//     } else {
//       window.alert('Directions request failed due to ' + status);
//     }
//   });
// };

// ClickEventHandler.prototype.getPlaceInformation = function(placeId) {
//   var me = this;
//   this.placesService.getDetails({placeId: placeId}, function(place, status) {
//     if (status === 'OK') {
//       me.infowindow.close();
//       me.infowindow.setPosition(place.geometry.location);
//       me.infowindowContent.children['place-icon'].src = place.icon;
//       me.infowindowContent.children['place-name'].textContent = place.name;
//       me.infowindowContent.children['place-id'].textContent = place.place_id;
//       me.infowindowContent.children['place-address'].textContent =
//           place.formatted_address;
//       me.infowindow.open(me.map);
//     }
//   });
// };