
class Map_Location {
  constructor(gameName) {
    this.map; //instantiate MapObject
    // new google.maps.Map(document.getElementById('map'), {
    //   center: location,
    //   zoom: 10
    // });
    
    this.info; //instantiate Info Object
    // new google.maps.InfoWindow();
    
    this.service; //instantiate markers Object
    // new google.maps.places.PlacesService(this.map);
    this.game = gameName;
    this.currentLocation = {
      lat: 33.699,
      lng: -117.829
    }
    this.pos;
    this.pullInititalMap = this.pullInititalMap.bind(this);
    this.changeToCurrentLocation = this.changeToCurrentLocation.bind(this);
    this.askCurrentLocation = this.askCurrentLocation.bind(this);
  }

pullInititalMap(){
  debugger;
  this.map = new google.maps.Map(document.getElementById('map'), {
    center: this.currentLocation,
    zoom: 10
  });
  this.askCurrentLocation()
  this.mapCreation(this.currentLocation, this.game);
}

changeToCurrentLocation(pos, gameName){
  this.pos;
  this.map = new google.maps.Map(document.getElementById('map'), {
    center: this.pos,
    zoom: 10
  });
}

askCurrentLocation(){
  this.info = new google.maps.InfoWindow();
  this.map;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        this.pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.changeToCurrentLocation(this.pos, this.game);
        placesList();
        createMarkers(places);
        this.infoWindow.setPosition(this.pos);
        this.infoWindow.setContent('Location found.');
        this.infoWindow.open(this.map);
        this.map.setCenter(this.pos);
      }, function () {
        handleLocationError(true, this.infoWindow, this.map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, this.infoWindow, this.map.getCenter());
    }
}



  mapCreation(pos, gameName) {
    this.map;
    this.service = new google.maps.places.PlacesService(this.map);
    var getNextPage = null;
    var moreButton = document.getElementById('more');
    moreButton.onclick = function () {
      moreButton.disabled = true;
      if (getNextPage) getNextPage();

    };

    // Perform a nearby search.
    this.service.textSearch({
        location: this.currentLocation,
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
    this.service.findPlaceFromQuery(this.request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }

        this.map.setCenter(results[0].geometry.location);
        console.log(results[0].geometry.location)
      }
    });

  }

}
