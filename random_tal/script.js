import randomNumb from "./randomizer.js";
const bigNumb = document.getElementById("bigNumber");

// function updatedNumb() {
//   let numb = "tilfældigt tal " + Math.floor(Math.random() * 101);
//   bigNumb.textContent = numb;
// }

// const updatedNumb = () => (bigNumb.textContent = `tilfældigt tal = ${Math.floor(Math.random() * 101)}`);

// updatedNumb();

const showNumb = () => {
  return (bigNumb.textContent = `tilældigt tal= ${randomNumb(1, 100)}`);
};

showNumb();
