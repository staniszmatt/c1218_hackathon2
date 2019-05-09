$(document).ready(startWhenLoaded)
let initialization = null;
function startWhenLoaded(){
  let domInformation = { //Passes all elements for click handling and editing that is needed. 
    initScanButton: $("#camera-button"),
    submitNumberInput: $(".search-bar"),
    displayDataElm: $(".info-container1"),
    displayYoutubeElm: $(".youtube-main"),
    youtubeArticleElm: $(".youtube-main .article.item"),
    displayDataImgElm: $("#product-image-placeholder"),
    modalButton: $('.btn-modal'),
    modalShadow: $("#modal-shadow"),
    modalBody: $(".modal"),
    modalDisplayText: $(".modal-body"),
    submitBarcodeNumberButton: $("#search-bar-button-image"),
    cancelScanButton: $(".cancel-scan"),
    homeIcon:$(".home-page-button"),
    reviewIcon:$(".reviews-page-button"),
    mapIcon:$(".map-page-button"),
    youtubeIcon:$(".youtube-page-button"),
    indexDisplayPage: $(".index-page"),
    productDisplayPage: $(".product-page"),
    youtubeDisplayPage: $(".youtube-page"),
    googleDisplayPage: $(".google-page"),
    searchBarContainer:$(".search-bar-container"),
    desktopDisplay:$(".desktop-display"),
    searchBarBtn:$(".searchBtn"),
  }
  initialization = new PBGS_init(domInformation); //TODO: Move this and next line into the user interface class
  initialization.clickHandler();
  domInformation.indexDisplayPage.show();
  domInformation.productDisplayPage.hide();
  domInformation.youtubeDisplayPage.hide();
  domInformation.googleDisplayPage.hide();
  domInformation.modalBody.hide();
  domInformation.modalShadow.hide();
  // domInformation.desktopDisplay.hide();
}