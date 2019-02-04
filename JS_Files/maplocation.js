var map, infoWindow, service;
var theTitle = "Monopoly"
var coords = {
  lat: 33.699,
  lng: -117.829
}
var googlePosition = pos;

function googleMapGameName(gameName) {
  return theTitle = gameName
}


function createMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: coords,
    zoom: 10
  });
}

function startMap(pos, gameName) {
  // Create the map.
  var placesList = document.getElementById('places');
  var location = pos || {
    lat: 33.699,
    lng: -117.829
  };
  map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 10
  });

  infoWindow = new google.maps.InfoWindow();


  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      googlePosition = pos;

      startMap(pos, theTitle);
      // placesList();
      // createMarkers(results);
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
      map.setZoom(10);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  // Create the places service.
  service = new google.maps.places.PlacesService(map);
  var getNextPage = null;
  var moreButton = document.getElementById('more');
  moreButton.onclick = function () {
    moreButton.disabled = true;
    if (getNextPage) getNextPage();

  };
  var request = {
    query: 'Monopoly',
    fields: ['name', 'geometry'],
  };

  // Perform a nearby search.
  map.setZoom(10);
  service.textSearch({
      location: pos,
      radius: 14000,
      type: ['store'],
      query: gameName + " game" //The title of the board game
    },
    function (results, status, pagination) {
      if (status !== 'OK') return;

      createMarkers(results);
      moreButton.disabled = !pagination.hasNextPage;
      getNextPage = pagination.hasNextPage && function () {
        pagination.nextPage();
      };
    });
  service.findPlaceFromQuery(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
      console.log(results[0].geometry.location)
    }
  });
}
//create markets on map
function createMarkers(places) {
  var bounds = new google.maps.LatLngBounds();
  var placesList = document.getElementById('places');

  for (var i = 0, place; place = places[i]; i++) {
    console.log(place);
    var image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    var marker = new google.maps.Marker({
      map: map,
      icon: image,
      title: place.name,
      position: place.geometry.location
    });

    var li = document.createElement('li');
    var pageBreak = document.createElement('br');
    li.textContent = place.name + " - " + place.formatted_address;


    console.log(li.textContent);
    placesList.appendChild(li);
    // document.getElementById('placeList').appendChild(pageBreak);

    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
  map.setZoom(10);
  map.getCenter(googlePosition);
}