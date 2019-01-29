$(document).ready( initializeApp);

function initializeApp(){
    typeWriter();
}



//Header Title
var counterLetter= 0;
function typeWriter() {
  var text = "Penguin Board Game Scanner";
  var speed = 210;
  if (counterLetter < text.length) {
    var newChar=$('.header').text()+(text.charAt(counterLetter));
    $('.header').text(newChar);
    counterLetter++;
    setTimeout(typeWriter,speed);
  } else {
      counterLetter=0;
     $('.header').text("");
      setTimeout(typeWriter,speed)
  }
}

