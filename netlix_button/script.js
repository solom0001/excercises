"strict";
//TODO:click start and the netflix button starts running down

// const finishButton = document.querySelector("#finish_button");
// const windowView = document.querySelector("#netflix_window");
// const condition = true;

// // const nextButton = document.querySelector("#next_button").addEventListener("click", () => {
// //   window.location.href = "https://www.netflix.com";
// // });
// //click start, button dissapears, and window appears
// finishButton.addEventListener("click", () => {
//   finishButton.classList.add("hidden");
//   windowView.classList.remove("hidden");
//   openNextEp();
// });

// //TODO:netflix button countdown and animation start

// function openNextEp() {
//   if (finishButton.classList.contains("hidden")) {
//     setTimeout(openWindow, 4000);
//   } else {
//     document.querySelector("#next_button").addEventListener("click", openWindow());
//   }
// }
// function openWindow() {
//   animationStart();
//   window.location.href = "https://www.netflix.com";
// }

// function animationStart() {
//   document.querySelector("#next_button").dataset.feature = "activated";
// }

// sequenceStart();
//TODO:animation end and new screen
//TODO:function for scroll detetct to end animation and end countdown
//TODO:
//TODO:
//you wait for the user to press the finish button
//input:button press(click)  //output:function passthrough

const finishBut = document.querySelector("#finish_button");
const netflixWindow = document.querySelector("#netflix_window");
const animCase = document.querySelector(".ani_case");
const nextBut = document.querySelector("#next_button");
let animationId = null;

finishBut.addEventListener("click", startSequence);

//once you register the button press, play an animation, and the finish button shall dissapear
//input:netflix_window //output:netflix window open
function startSequence() {
  netflixWindow.classList.remove("hidden");
  finishBut.classList.add("hidden");

  const mouseHandler = () => {
    registerInput();
    netflixWindow.removeEventListener("mousemove", mouseHandler); // remove after first move
  };

  netflixWindow.addEventListener("mousemove", mouseHandler);

  runAnimation();
}
//
// setInterval(runAnimation(), 4000);
//runAnimation

//Once it does, the netflix window with the netflix button shall appear
//input:  //output:
//after 1 second, the grey netflix button will start changing color to white from left to right-
//signaling a countdown which shall take 5 sec
//input:next_button  //output:animation cowntdown on next_button
function runAnimation() {
  // let animationId = null;
  progress = 0;

  clearInterval(animationId);

  const frame = () => {
    if (progress == 230) {
      clearInterval(animationId);
    } else {
      progress++;
      animCase.style.width = progress + "px";
    }
  };
  animationId = setInterval(frame, 0.23);
  setTimeout(() => {
    clearInterval(animationId);
  }, 5000);
  // progress++;
  // animCase.style.width = progress + "%";
}

//If the user does not move the mouse, the countdown will complete uninterrupted, but if they move the mouse at-
//all, the countdown animation shall immediately stop, and the button become completely white.
function registerInput() {
  // if()
  animCase.style.width = "230px";
  clearInterval(animationId);
}
