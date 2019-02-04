// var map, infoWindow;
// var location;



// function testAjax(){
//   var ajaxCallOptions = {
//       url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAS5OO9L2mJhS-RqA8lhnqz1VXGG8hHdKY",
//       method: 'post',
//       dataType: 'json',
//       success: returnData,
//       key: 'AIzaSyAS5OO9L2mJhS-RqA8lhnqz1VXGG8hHdKY'
//       }
//       $.ajax(ajaxCallOptions);
//   }
//   function returnData(response){
//     location = response.location;
//     lat = response.location.lat;
//     lng = response.location.lng;
//     console.log(lat);
//     console.log(lng);
// }

//   function returnData(response){
//     location = response.location;
//     lat = response.location.lat;
//     lng = response.location.lng;
//     console.log(lat);
//     console.log(lng);
//     createMarkers(places);
// }


//       function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 34.397, lng: -117.644},
//           zoom: 6
//         });
//         infoWindow = new google.maps.InfoWindow;

//         // Try HTML5 geolocation.
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(function(position) {
//             var pos = {
//               lat: position.coords.latitude,
//               lng: position.coords.longitude
//             };
//             let latt = pos.lat;
//             let long = pos.lng;
//             console.log(latt);
//             console.log(long);
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
//         service.nearbySearch(
//             {location: location, radius: 16000, type: ['store'], query: "Monopoly Game"},
//             function(results, status, pagination) {
//               if (status !== 'OK') return;

//               createMarkers(results);
//               moreButton.disabled = !pagination.hasNextPage;
//               getNextPage = pagination.hasNextPage && function() {
//                 pagination.nextPage();
//               };
//             });
//       }

      
//       function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//         infoWindow.setPosition(pos);
//         infoWindow.setContent(browserHasGeolocation ?
//                               'Error: The Geolocation service failed.' :
//                               'Error: Your browser doesn\'t support geolocation.');
//         infoWindow.open(map);
//       }
    

    
//     function createMarkers(places) {
//         console.log(places);
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
//     }


// // $.ajax({
// //     url: "",
//     type: "post",
//     async: true,
//     data:  {"id": 1},
//     success : function(value){
//         console.log(value);
//                 //alert("RESPONSE");
//         var data = value.split(",");
//         var latitude  = (data[0]);
//         var longitude  = (data[1]); 
//         }      
        
//     });

// class CurrentLocation{
//     constructor(){
//         this.long = 0;
//         this.latt = 0;
//     }
//     getGeolocation(){
//         $.ajax({
//             dataType: 'json',
//             url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAS5OO9L2mJhS-RqA8lhnqz1VXGG8hHdKY',
//             success: function(locations){
//                 console.log(locations)
//             }
//         })
//     }
// }