
// get the number of buttoms using the .drum class as a query paramenter
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// looping through all buttoms
for (var i = 0; i < numberOfDrumButtons; i++) {

  // add a click event to each buttom
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // get the innerHTML of this buttom at this point of the loop
    var buttonInnerHTML = this.innerHTML;

    // passing this buttom as a parameter to the makeSound function
    makeSound(buttonInnerHTML);

    // passing this buttom as a parameter to the buttomAnimation function
    buttonAnimation(buttonInnerHTML);

  });

}

// add a keypress event to a buttom
document.addEventListener("keypress", function(event) {

  // passing the event key argument to the makeSound function
  makeSound(event.key);

  // passing the event key argument to the buttomAnimation function
  buttonAnimation(event.key);

});

// get the key that has been passed by the keypress event listener
function makeSound(key) {

  // for each case, add a correspondent sound
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

// get the key that has been passed by the keypress event listener
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
