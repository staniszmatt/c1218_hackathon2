class YouTube_page {
  constructor() {
    this.options = {
      method: 'get',
      url: 'https://www.googleapis.com/youtube/v3/search',
      dataType: 'json',
      data: {
        part: 'snippet',
        key: 'AIzaSyARgDW5vI8D7LugaaKcd21ORq5ILiefBxM',
        maxResults: 5,
        q: ""
      },
      success: (data) => {
        this.resultsLoop(data)
      }
    }
    this.loadAndReady = this.loadAndReady.bind(this);
    this.resultsLoop = this.resultsLoop.bind(this);
    this.mainVid = this.mainVid.bind(this);
  };
  /**
   * @param {string} query-search parameters for ajax calls 
   */
  loadAndReady(query) {
    
    this.options.data.q = query;
    this.loadVids();
  }

  loadVids() {
    $.ajax(this.options);
  }
  /**
   * @param {string} id-data passed in from object to retrieve the current video
   */
  mainVid(id) {
    $('#video').html(
      `<iframe width="350" height="250" id="youtube-video" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  }
  /**
  * @param {string} id-data passed in from object to retrieve the current video
  */
  resultsLoop(data) {
    $("#video").empty();
    $('article').empty();
    if (data.items.length === 0) {
      $("#video").append("<div>").text("Sorry, No Videos Found!").addClass("no-vidoes-found");
    } else {
      this.mainVid(data.items[0].id.videoId);
      $.each(data.items, function (i, item) {
        if (i != 0) {
          let thumb = item.snippet.thumbnails.medium.url;
          let title = item.snippet.title;
          let desc = item.snippet.description.substring(0, 100);
          let vid = item.id.videoId;
          initialization.domInformation.displayYoutubeElm.append(`
            <article class="item" data-key="${vid}">
            <img src="${thumb}" alt="" class="thumb">
            <div class="details">
            <h4>${title}</h4>
            <p>${desc}</p>
            </div>
            </article>
          `);
        }
      });
    }
    initialization.domInformation.youtubeArticleElm.on("click", ".item", (event) => {
      this.mainVid(event.currentTarget.dataset.key);
    });
    // Hiding display after information is loaded. 
    initialization.cancelScan();
    initialization.domInformation.youtubeDisplayPage.hide();
  }
}