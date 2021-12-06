const soundEffect = new Audio("sounds/buttonsound.mp3");
let lastText = "Rhythms of Evolution";
let removeQuote = "";
let lastImage = "images/moon.gif";
let imagePosition = 0;
let imageHorizontal = 1;
let imageVertical = 0;

let dragHorizontal = 0;
let dragVertical = 0;
let dragOffsetH = 0;
let dragOffsetV = 0;
let dragging = false;

setInterval(movePicture, 20);
// document.addEventListener("keydown", keyboard);

dragHorizontal = window.localStorage.getItem("dragHorizontal");
dragVertical = window.localStorage.getItem("dragVertical");

function onLoad() {
  document.getElementById('dragImage').style.left = dragHorizontal - 150 + "px";
  document.getElementById('dragImage').style.top = dragVertical - 150 + "px";
}

function mouseMove(event) {
  if (dragging) {
    dragHorizontal = event.pageX;
    dragVertical = event.pageY;

    document.getElementById("dragImage").style.left = dragHorizontal - 25 + "px";
    document.getElementById("dragImage").style.top = dragVertical - 25 + "px";
  }
}

function mouseDown() {
  dragging = true;
  dragOffsetH = event.pageX - parseInt(document.getElementById("dragImage").style.left, 10);
  dragOffsetV = event.pageY - parseInt(document.getElementById("dragImage").style.top, 10);
}

function mouseUp() {
  dragging = false;

  window.localStorage.setItem("dragHorizontal", dragHorizontal);
  window.localStorage.setItem("dragVertical", dragVertical);
}


function movePicture() {

  if (imagePosition === 300) {
    imagePosition = imagePosition - 10;
  } else {
    imagePosition = imagePosition + 1;
    document.getElementById("dynamicPicture").style.right = imagePosition + "px";
  }
}

function myFunction() {
  soundEffect.play();

  //changes between image states
  let swapImage = lastImage;
  lastImage = document.getElementById("dynamicPicture").src
  document.getElementById("dynamicPicture").src = swapImage;

  let swapText = lastText;
  lastText = document.getElementById("dynamicHeader").innerHTML
  document.getElementById("dynamicHeader").innerHTML = swapText;

  let swapQuote = removeQuote;
  removeQuote = document.getElementById("removeQuote").innerHTML
  document.getElementById("removeQuote").innerHTML = swapQuote;
}


// function keyboard(event){
// //  window.alert("Hello");
// if (event.keyCode === 38) {
//   imageVertical = imageVertical + 9;
// }
// if (event.keyCode === 40){
//   imageVertical = imageVertical - 9;
// }
// if (event.keyCode === 37) {
//   imageHorizontal = imageHorizontal + 9;
// }
// if (event.keyCode === 39){
//   imageHorizontal = imageHorizontal - 9;
// }
//   document.getElementById("dynamicPicture").style.right = imageHorizontal +"px";
//   document.getElementById("dynamicPicture").style.bottom = imageVertical +"px";
// }

// function addSoundToNumbers(){
//   soundEffect.play();
//   document.getElementById("numbersSound").innerHTML = soundEffect;
// }
