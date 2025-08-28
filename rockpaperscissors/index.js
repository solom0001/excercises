"use strict";

let userChoice;
let computerChoice;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const winText = document.querySelector("#win");
const loseText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");

addEventListenersToButtons();
function addEventListenersToButtons() {
  rockBtn.addEventListener("click", () => startUserChoice("rock"));
  paperBtn.addEventListener("click", () => startUserChoice("paper"));
  scissorsBtn.addEventListener("click", () => startUserChoice("scissors"));
}

// function rockKlik() {
//   //   console.log("ROCK");
//   userChoice = "rock";
//   computerGuess();
// }
// function paperKlik() {
//   //   console.log("PAPER");
//   userChoice = "paper";
//   computerGuess();
// }
// function scissorsKlik() {
//   //   console.log("SCISSORS");
//   userChoice = "scissors";
//   computerGuess();
// }

function startUserChoice(choice) {
  userChoice = choice;
  computerGuess();
}

function computerGuess() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = choiceArray[randomNum];
  //   console.log("computerChoice", computerChoice);
  //   console.log(userChoice);
  //   computerChoice("paper");
  animationStarter();
}

function animationStarter() {
  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", animationEnd);
  //   showResultScreen();
}

function animationEnd() {
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

function showResultScreen() {
  winText.classList.add("hidden");
  loseText.classList.add("hidden");
  drawText.classList.add("hidden");

  if (userChoice === computerChoice) {
    drawText.classList.remove("hidden");
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    winText.classList.remove("hidden");
  } else {
    loseText.classList.remove("hidden");
  }
}
