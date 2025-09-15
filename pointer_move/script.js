//TODO: register mouse movement

let xPos;
let yPos;

document.addEventListener("mousemove", updatePosition);

function updatePosition(event) {
  xPos = event.clientX;
  //   yPos = event.clientY;
  if (xPos >= 0 && xPos < 350) {
    document.querySelector("body").dataset.feature = "leftSide";
  } else if (xPos > 350 && xPos < 650) {
    document.querySelector("body").dataset.feature = "leftSide1";
  } else if (xPos > 650 && xPos < 850) {
    document.querySelector("body").dataset.feature = "middle";
  } else if (xPos > 850 && xPos < 1200) {
    document.querySelector("body").dataset.feature = "rightSide1";
  } else {
    document.querySelector("body").dataset.feature = "rightSide";
  }
  console.log(xPos);
}
//TODO: update color accroeding to mouse position

// function changeColor() {
//   let nyXpos = updatePosition();
//   if (nyXpos > 700) {
//     document.querySelector("body").dataset.feature = "rightSide";
//   } else {
//     document.querySelector("body").dataset.feature = "leftSide";
//   }
// }

// document.addEventListener("mouseout", changeColor);
