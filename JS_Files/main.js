$(document).ready(startWhenloaded)
let initialization = null;
function startWhenloaded(){
  //TODO: Insert Click Handlers and editing of the DOM elements 
  let domInformation = {
    initScanButton: $(".scan"),
    submitBarcodeNumberButton: $(".submit-code"),
    submitNumberInput: $(".search-bar")
  }
  initialization = new PBGS_init(domInformation); //TODO: Move this and next line into the user interface class
  initialization.clickHandler();
}
