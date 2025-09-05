"strict";
import { randomNumb } from "../utils/utils.js";
const list = document.querySelector("ul");

function genereSoejle() {
  const li = document.createElement("li");
  li.style.setProperty("--height", randomNumb(0, 100));
  list.appendChild(li);

  return li;
}

const dataPool = () => {
  if (list.children.length >= 20) {
    list.removeChild(list.firstChild);
  }
  genereSoejle();
};

function createData() {
  return setInterval(dataPool, 600);
}

createData();

// import { randomNumb } from "../utils/utils.js";
// const list = document.querySelector("ul");

// const barArr = [];

// setInterval(generateBars, 500);

// function generateBars() {
//   barArr.push(randomNumb);

//   if (barArr.length > 6) {
//     barArr.shift();
//   }
//   render();
// }

// function render() {
//   document.querySelectorAll("li").forEach((elm, i) => {
//     console.log("elm:", elm);
//     console.log("i:", i);

//     elm.style.setProperty("--height", barArr[i]);
//   });
// }
