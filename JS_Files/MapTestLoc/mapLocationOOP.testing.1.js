class  Map_Module {
  constructor() {
    super();
    this.$element = $(element);
    this.initMap();
  }

  initMap() {
    if (!$('#map').length) {

      window.renderMap = this.renderMap.bind(this);

      var api = 'AIzaSyAS5OO9L2mJhS-RqA8lhnqz1VXGG8hHdKY';
      var s = document.createElement('script');
      s.src = '//maps.googleapis.com/maps/api/js?key=' + api + '&callback=renderMap';
      s.type = 'text/javascript';
      s.id = 'gmaps-api';
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  }

  renderMap() {
    console.log('called back');
  }
}