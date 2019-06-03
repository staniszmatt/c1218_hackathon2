class StartMap {
  constructor() {
    this.moreButton = this.map = this.infoWindow = this.service = this.googlePosition = null;
    this.theTitle = "";
    //bindings
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.googleMapGameName = this.googleMapGameName.bind(this);
    this.startMap = this.startMap.bind(this);
    this.createMarkers = this.createMarkers.bind(this);
    this.centerToMarker = this.centerToMarker.bind(this);
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.googlePosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
      () => {
        handleLocationError(true, this.infoWindow, this.map.getCenter());
      }
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, this.infoWindow, this.map.getCenter());
    }

    console.log('this is get current location')
  }

  googleMapGameName(gameName) {
    if (!gameName){
      this.errorHandler("No Title Found For Locations!");
    } else {
      this.theTitle = gameName;
    }
  }

  startMap() {
    // Create the map.
    $("#places").empty();
    $('#map').empty();
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: this.googlePosition,
      zoom: 8
    });
    this.map.setCenter(this.googlePosition);
    // this.infoWindow = new google.maps.InfoWindow();
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.googlePosition = pos;
        this.startMap();
        // this.infoWindow.setPosition(this.googlePosition);
        // this.infoWindow.setContent('Locations found.');
        // this.infoWindow.open(this.map);
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
    // Create the places service.
    this.service = new google.maps.places.PlacesService(this.map);
    var getNextPage = null;
    this.moreButton = document.getElementById('more');
    this.moreButton.onclick = function () {
      this.moreButton.disabled = true;
      if (getNextPage) getNextPage();
    };
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

  }
  //create markets on map
  createMarkers(places) {
    var bounds = new google.maps.LatLngBounds();
    var placesList = document.getElementById('places');
    for (var i = 0; i < places.length; i++) {
      var place = places[i];
      // console.log('this is each place', place)
      var image = {
        url: place.icon,
        size: new google.maps.Size(100, 100),
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
     
      var infoWindow = new google.maps.InfoWindow({
        pixelOffset: new google.maps.Size(-25, 0),
      });
      marker.addListener('click', function() {
        infoWindow.setContent("<p>" + marker.title + "<br/>" + marker.address + "</p>" )
        infoWindow.open(map, marker);
        this.map.setCenter(marker.position)

      });
      var li = document.createElement('li');
   
      li.textContent = place.name + " - " + place.formatted_address;
      li.addEventListener("click", this.centerToMarker);



      placesList.appendChild(li);
      // document.getElementById('placesList').appendChild(pageBreak);
      bounds.extend(place.geometry.location);
    }
    this.map.fitBounds(bounds);
    this.map.setZoom(12);
    this.map.getCenter(this.googlePosition);
  }

  centerToMarker(){
  
    console.log('this is places.list', this.place)
    console.log('im in it')
    
  }
 
}


