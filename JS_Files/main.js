$(document).ready(startWhenloaded)
let initialization = null;
function startWhenloaded(){
  //TODO: Insert Click Handlers and editing of the DOM elements 
  let domInformation = {
    initScanButton: $("#camera-button"),
    submitBarcodeNumberButton: $(".submit-input"),
    submitNumberInput: $(".search-bar"),
    cancleScanButton: $(".cancel-scan")
  }
  initialization = new PBGS_init(domInformation); //TODO: Move this and next line into the user interface class
  initialization.clickHandler();
}

$("#camera-button").on("click", ()=>{
  console.log("penguin")
  $(".penguin-logo").slideUp();
});