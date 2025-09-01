import { computerGuess } from "./index.js";

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

let userChoice;

function addEventListenersToButtons() {
  rockBtn.addEventListener("click", () => startUserChoice("rock"));
  paperBtn.addEventListener("click", () => startUserChoice("paper"));
  scissorsBtn.addEventListener("click", () => startUserChoice("scissors"));
}

addEventListenersToButtons();

function startUserChoice(choice) {
  setUserChoice(choice);
  computerGuess();
}

function getUserChoice() {
  return userChoice;
}
function setUserChoice() {
  userChoice = choice;
}

export { addEventListenersToButtons, startUserChoice, getUserChoice };
