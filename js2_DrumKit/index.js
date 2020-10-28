var numberOfDrumButtons = document.querySelectorAll(".drum").length; // number of drum buttons

function playSound(key) //Function to detect and play a sound when a key is pressed
{

  switch (key) {
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();

      break;

    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();

      break;

    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();

      break;

    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();

      break;

    case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();

      break;

    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();

      break;

    case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();

      break;

    default:console.log(letterPressed);

  }
}

function buttonAnimation(keyPressed) //function for button animations
{

  var targetElement = document.querySelector("."+keyPressed); //variable to select the element with class name given i/p

  targetElement.classList.add("pressed");

  setTimeout(function(){
    targetElement.classList.remove("pressed");
  },100);
}

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var letterPressed = this.innerHTML;

    playSound(letterPressed);
    buttonAnimation(letterPressed);

  });

}

document.addEventListener("keydown",function(){
  playSound(event.key);
  buttonAnimation(event.key);
});
