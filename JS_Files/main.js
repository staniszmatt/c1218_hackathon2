$(document).ready(startWhenloaded)
let initialization = null;
function startWhenloaded(){
  //TODO: Insert Click Handlers and editing of the DOM elements 
  let domInformation = {
    initScanButton: $("#camera-button"),
    submitNumberInput: $(".search-bar"),
    submitBarcodeNumberButton: $("#search-bar-button-image"),
    cancleScanButton: $(".cancel-scan"),
    displayDataElm: $(".info-container1")
  }
  initialization = new PBGS_init(domInformation); //TODO: Move this and next line into the user interface class
  initialization.clickHandler();
  $("#main-container").show();
  $(".product-page").hide();
}
