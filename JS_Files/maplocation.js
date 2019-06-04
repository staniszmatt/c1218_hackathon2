class StartMap {
  constructor() {
    this.moreButton = this.map = this.infoWindow = this.service = this.googlePosition = null;
    this.theTitle = "";
    this.places = {}; 
    this.markerCounter = 0;
    //bindings
    this.googleMapGameName = this.googleMapGameName.bind(this);
    this.startMap = this.startMap.bind(this);
    this.createMarkers = this.createMarkers.bind(this);
  }

  googleMapGameName(gameName) {
    this.markerCounter = 0;
    this.places = {};
    if (!gameName){
      this.errorHandler("No Title Found For Locations!");
    } else {
      this.theTitle = gameName;
    }
    this.startMap()
  }

  startMap() {
    $("#places").empty();
    $('#map').empty();
    // this.infoWindow = new google.maps.InfoWindow();
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.googlePosition = pos;
        if (!this.googlePosition) return; 
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: this.googlePosition,
          zoom: 8
        });
        this.map.setCenter(this.googlePosition);
        this.service = new google.maps.places.PlacesService(this.map);
        var getNextPage = null;
        this.moreButton = document.getElementById('more');
        this.moreButton.addEventListener("click", () => {
          this.moreButton.disabled = true;
          if (getNextPage) getNextPage();
        });
        var request = {
          query: this.theTitle,
          fields: ['name', 'geometry'],
        };
        // Perform a nearby search.
        this.map.setZoom(8);
        this.service.textSearch({
          location: this.googlePosition,
          radius: 1000,
          type: ['store'],
          query: this.theTitle //+ " game" //The title of the board game
        },
          (results, status, pagination) => {
            if (status !== 'OK') return;
            this.createMarkers(results);
            this.moreButton.disabled = !pagination.hasNextPage;
            if (this.moreButton.disabled) {
              $("#more").text("No More Results").addClass("no-more");
            } else {
              $("#more").text("More Results").removeClass("no-more");
            }
            getNextPage = pagination.hasNextPage && function () {
              pagination.nextPage();
            };
          });
        this.service.findPlaceFromQuery(request, function (results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }
            this.map.setCenter(results[0].geometry.location);
          }
        });
        this.map.setCenter(this.googlePosition);
        this.map.setZoom(8);
      }),
        function () {
          handleLocationError(true, this.infoWindow, this.map.getCenter());
        };
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, this.infoWindow, this.map.getCenter());
    }
  }
  //create markets on map
  createMarkers(places) {
    var bounds = new google.maps.LatLngBounds();
    var placesList = document.getElementById('places');
    for (var i = 0; i < places.length; i++) {
      var place = places[i];
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      const marker = new google.maps.Marker({
        map: this.map,
        icon: image,
        title: place.name,
        position: place.geometry.location,
        address: place.formatted_address
        
      });
      this.places[this.markerCounter] = marker;
      var infoWindow = new google.maps.InfoWindow({
        pixelOffset: new google.maps.Size(-25, 0),
      });
      marker.addListener('click', function() {
        infoWindow.setContent("<p>" + marker.title + "<br/>" + marker.address + "</p>" )
        infoWindow.open(map, marker);
        this.map.setCenter(marker.position)
      });
      var li = document.createElement('li');
      $(li).attr("id", this.markerCounter);
      this.markerCounter++;
      li.textContent = place.name + " - " + place.formatted_address;
      li.addEventListener("click", (event) => {
        let marker = this.places[$(event.target).attr("id")];
        infoWindow.setContent("<p>" + marker.title + "<br/>" + marker.address + "</p>")
        infoWindow.open(map, marker);
        this.map.setCenter(marker.position);
      });
      placesList.appendChild(li);
      // document.getElementById('placesList').appendChild(pageBreak);
      bounds.extend(place.geometry.location);
    }
    this.map.fitBounds(bounds);
    this.map.setZoom(12);
    this.map.getCenter(this.googlePosition);
  }
}


