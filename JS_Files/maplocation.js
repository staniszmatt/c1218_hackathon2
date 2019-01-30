class Map_location{
  constructor(){
    this.pyrmont = null;
    this.map;
    this.service;
    this.infowindow = {};
    this.getNextPage = null;
    this.moreButton = null;
    this.bounds = null;
    this.placesList = null;
    this.marker = null;
  }

  startApp(){
    this.initMap();
    this.createMarkers(places); 
  }

  initMap() {
    // Create the map.
    this.pyrmont = {lat: 33.636, lng: -117.746};
  //   infowindow = new google.maps.InfoWindow({content: "Dan's Play Room" //to be filled with content from google places
  // }); //TODO: Load the data for locations
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: this.pyrmont,
      zoom: 10
    });

    // Create the places service.
    this.service = new google.maps.places.PlacesService(this.map);
    this.moreButton = document.getElementById('more');
    this.moreButton.onclick = function() {
      this.moreButton.disabled = true;
      if (this.getNextPage) getNextPage();
    };

    // Perform a nearby search.
    this.service.nearbySearch(
        {location: this.pyrmont, radius: 16000, type: ['store'], query: 'target'},
        function(results, status, pagination) {
          if (status !== 'OK') return;

          createMarkers(results);
          this.moreButton.disabled = !pagination.hasNextPage;
          this.getNextPage = pagination.hasNextPage && function() {
            pagination.nextPage();
          };
        });
        this.createMarkers(places)
  }

  createMarkers(places) {
    this.bounds = new google.maps.LatLngBounds();
    this.placesList = document.getElementById('places');

    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      this.marker = new google.maps.Marker({
        map: this.map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });
      

      google.maps.event.addListener(this.marker, 'click', function() {
        this.infowindow.setContent(place.name);
        this.infowindow.open(this.map, this);
      });

      var li = document.createElement('li');
      li.textContent = place.name;
      this.placesList.appendChild(li);

      this.bounds.extend(place.geometry.location);
    }
    this.map.fitBounds(this.bounds);
  }
}