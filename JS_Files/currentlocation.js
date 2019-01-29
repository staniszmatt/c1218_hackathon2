// var map, infoWindow;
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
//       }

//       function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//         infoWindow.setPosition(pos);
//         infoWindow.setContent(browserHasGeolocation ?
//                               'Error: The Geolocation service failed.' :
//                               'Error: Your browser doesn\'t support geolocation.');
//         infoWindow.open(map);
//       }
      
      function testAjax(){
        var ajaxCallOptions = {
            url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAS5OO9L2mJhS-RqA8lhnqz1VXGG8hHdKY",
            method: 'post',
            dataType: 'json',
            success: returnData,
            key: 'AIzaSyAS5OO9L2mJhS-RqA8lhnqz1VXGG8hHdKY'
            }
            $.ajax(ajaxCallOptions);
        }

    function returnData(response){
        console.log(response);
    }

// $.ajax({
//     url: "",
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