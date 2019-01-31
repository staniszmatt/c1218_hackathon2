$(document).ready(startWhenloaded)
let initialization = null;
function startWhenloaded(){
  //TODO: Insert Click Handlers and editing of the DOM elements 
  let domInformation = {
    initScanButton: $("#camera-button"),
    submitBarcodeNumberButton: $(".submit-input"),
    cancleScanButton: $(".cancel-scan"),
    homeIcon:$(".homeIcon"),
    reviewIcon:$(".reviewIcon"),
    mapIcon:$(".mapIcon"),
    youtubeIcon:$(".youtubeIcon")
  }
  initialization = new PBGS_init(domInformation); //TODO: Move this and next line into the user interface class
  initialization.clickHandler();
  $("#main-container").show();
  $(".product-page").hide();
  testAjax();
  returnData(response);
  whenCameraIsClick();
  whenIndexClicked();
  whenyouTubeClicked();
  whenGoogleClicked();
}

