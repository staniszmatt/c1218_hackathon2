
// var map, infoWindow, service;

//       function initMap(pos) {
//         // Create the map.
//         var currentLocation = pos;
//         var location = pos || {lat: 33.699, lng: -120.829};
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: location,
//           zoom: 10
//         });

//         infoWindow = new google.maps.InfoWindow();

//         // Try HTML5 geolocation.
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(function(position) {
//             var pos = {
//               lat: position.coords.latitude,
//               lng: position.coords.longitude
//             };

//             initMap(pos);
//             placesList();
//             createMarkers(places);
//             infoWindow.setPosition(pos);
//             infoWindow.setContent('Location found.');
//             infoWindow.open(map);
//             map.setCenter(pos);
//           }, function() {
//             handleLocationError(true, infoWindow, map.getCenter());
//           });
//         } else {
//           // Browser doesn't support Geolocation
//           handleLocationError(false, infoWindow, map.getCenter());
//         }

//         // Create the places service.
//         var service = new google.maps.places.PlacesService(map);
//         var getNextPage = null;
//         var moreButton = document.getElementById('more');
//         moreButton.onclick = function() {
//           moreButton.disabled = true;
//           if (getNextPage) getNextPage();
         
//         };
        
//         // Perform a nearby search.
//         service.textSearch(
//           {
//             location: location, 
//             radius: 14000, 
//             type: ['store'], 
//           query: "monopoly game" //The title of the board game
//           },
//             function(results, status, pagination) {
//               if (status !== 'OK') return;

//               createMarkers(results);
//               moreButton.disabled = !pagination.hasNextPage;
//               getNextPage = pagination.hasNextPage && function() {
//                 pagination.nextPage();
//               };
//             });
//             service.findPlaceFromQuery(request, function(results, status) {
//               if (status === google.maps.places.PlacesServiceStatus.OK) {
//                 for (var i = 0; i < results.length; i++) {
//                   createMarker(results[i]);
//                 }
    
//                 map.setCenter(results[0].geometry.location);
//                 console.log(results[0].geometry.location)
//               }
//             });
//       }
//       //create markets on map
//       function createMarkers(places) {
//         var bounds = new google.maps.LatLngBounds();
//         var placesList = document.getElementById('places');

//         for (var i = 0, place; place = places[i]; i++) {
//           console.log(place);
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
//           li.textContent = place.name +" - "+ place.formatted_address;
           
//           console.log(li.textContent);
//           placesList.appendChild(li);

//           bounds.extend(place.geometry.location);
//         }
//         map.fitBounds(bounds);
//       }
  