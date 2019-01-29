$(document).ready(function(){
    var key= 'AIzaSyARgDW5vI8D7LugaaKcd21ORq5ILiefBxM';
    var playlistId = 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
    
      var options = {
          part: 'snippet',
          key: key,
          maxResults: 20,
          playlistId: playlistId
      }
  
      loadVids();
  
      function loadVids() {
          $.getJSON(URL, options, function (data) {
              var id = data.items[0].snippet.resourceId.videoId;// we need to find our data path on youtube
              mainVid(id);
              resultsLoop(data);
          });
      }
  
      function mainVid(id) {
          $('#video').html(
              // we will need to add in the correct source, this has to be dynamically done each time the user puts in their info, the 
              //source will change
                   `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
      }
  
    
   
    
    
          
      function resultsLoop(data) {
  
          $.each(data.items, function (i, item) {
  
              var thumb = item.snippet.thumbnails.medium.url;
              var title = item.snippet.title;
              var desc = item.snippet.description.substring(0, 100);
              var vid = item.snippet.resourceId.videoId;
  
  
              $('main').append(`
                              <article class="item" data-key="${vid}">
  
                                  <img src="${thumb}" alt="" class="thumb">
                                  <div class="details">
                                      <h4>${title}</h4>
                                      <p>${desc}</p>
                                  </div>
  
                              </article>
                          `);
          });
      }
  
          // CLICK EVENT
      $('main').on('click', 'article', function () {
          var id = $(this).attr('data-key');
          mainVid(id);
      });
  
  
  });