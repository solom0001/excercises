"strict";
const list = document.querySelector("ul");

const randomNumb = (a, b) => {
  return Math.floor(Math.random() * 100);
};

function genereSoejle() {
  const li = document.createElement("li");
  li.style.setProperty("--height", randomNumb(0, 100));
  list.appendChild(li);

  return li;
}

const dataPool = () => {
  if (list.children.length >= 20) {
    list.removeChild(list.children[0]);
  }
  genereSoejle();
};

function createData1() {
  return setInterval(dataPool, 600);
}

createData1();
