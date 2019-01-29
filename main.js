$(document).ready(startWhenloaded)

function startWhenloaded(){
  let initScanner = new UPC_Scanner(); //TODO: Move this and next line into the user interface class
  initScanner.initScanner();
}