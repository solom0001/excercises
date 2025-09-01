import { showResultScreen } from "./index.js";
import { getUserChoice } from "./events.js";

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

function animationStarter() {
  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", animationEnd);
  //   showResultScreen();
}

function animationEnd() {
  const userChoice = getUserChoice();
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");

  if (userChoice === "rock") {
    player1.classList.add("rock");
  } else if (userChoice === "paper") {
    player1.classList.add("paper");
  } else if (userChoice === "scissors") {
    player1.classList.add("scissors");
  }

  if (computerChoice === "rock") {
    player2.classList.add("rock");
  } else if (computerChoice === "paper") {
    player2.classList.add("paper");
  } else if (computerChoice === "scissors") {
    player2.classList.add("scissors");
  }

  showResultScreen();
  console.log("computer choice: ", computerChoice);
}

export default animationStarter;
