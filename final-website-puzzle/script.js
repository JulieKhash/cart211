const soundFX = new Audio("sounds/buttonsound.wav");
let skullPosition = 0;

function showSpark() {
  document.getElementById("spark").style.visibility = "visible";
}

function split() {
  soundFX.play();
  setInterval(moveSkullleft, 10);
  setInterval(moveSkullright, 20);
}

function moveSkullleft() {
  if (skullPosition < 21 && skullPosition > -120) {
    skullPosition -= 2;
    document.getElementById("left").style.left = skullPosition + "px";
  }
}

function moveSkullright() {
  skullPosition += 2;
  document.getElementById("right").style.right = skullPosition + "px";
}

let images = new Array()
for (let i = 1; i < 134; i++) {
  images[i] = new Image()
  images[i].src = "images/puzzleimg/img" + i + ".jpg"
  // console.log(images);
}
let imageIndex = 2;

function replaceImage(imageId) {
  document.getElementById(imageId).src = images[imageIndex].src;
  imageIndex++;
  if (imageIndex > 133) {
    imageIndex = 1;
  }
}

function changeImage(idname) {
  soundFX.play();
  document.getElementById(idname).src = "images/clickimg/sun.png"
}
