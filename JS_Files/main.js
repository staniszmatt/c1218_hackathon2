$(document).ready(startWhenLoaded);
let initialization = null;
function startWhenLoaded(){
  let domInformation = { //Passes all elements for click handling and editing that is needed. 
    initScanButton: $("#camera-button"),
    submitNumberInput: $(".search-bar"),
    displayDataElm: $(".info-container"),
    displayYoutubeElm: $(".youtube-main"),
    youtubeArticleElm: $(".youtube-main .article.item"),
    displayDataImgElm: $("#product-image-placeholder"),
    modalButton: $('.btn-modal'),
    modalShadow: $("#modal-shadow"),
    modalBody: $(".modal"),
    modalDisplayText: $(".modal-body"),
    submitBarcodeNumberButton: $("#search-bar-button-image"),
    cancelScanButton: $(".cancel-scan"),
    homeIcon:$(".home"),
    reviewIcon:$(".product"),
    mapIcon:$(".map"),
    youtubeIcon:$(".youtube"),
    indexDisplayPage: $(".index-page"),
    productDisplayPage: $(".product-page"),
    youtubeDisplayPage: $(".youtube-page"),
    googleDisplayPage: $(".google-page"),
    searchBarContainer:$(".search-bar-container"),
    desktopDisplay:$(".desktop-display")
  }
  initialization = new PBGS_init(domInformation); //TODO: Move this and next line into the user interface class
  initialization.clickHandler();
  domInformation.indexDisplayPage.show();
  domInformation.productDisplayPage.hide();
  domInformation.youtubeDisplayPage.hide();
  domInformation.googleDisplayPage.hide();
  domInformation.modalBody.hide();
  domInformation.modalShadow.hide();

  phoneSizing();
}

function phoneSizing() {
  console.log('Resizing');
  let $window = $(window);
  let isMinimized = false;

  resize = () => {
    if (!isMinimized) {
      if ($window.width() < 1600){
        console.log("resize < 1600")
        $(".nav-bar-container").detach().insertAfter(".google-page");
        isMinimized = true;
      } 
    } 
    if ($window.width() >= 1600) {
      console.log("resize >= 1600");
      $(".nav-bar-container").detach().appendTo(".app-title-container");
      isMinimized = false;
    }
  }
  $window.resize(resize).trigger('resize');
}