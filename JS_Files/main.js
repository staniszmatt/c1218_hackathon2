$(document).ready(startWhenloaded)
let initScanner = null;
function startWhenloaded(){
  initScanner = new UPC_Scanner(); //TODO: Move this and next line into the user interface class
}