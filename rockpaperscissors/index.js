"use strict";
import animationStarter from "./animations.js";
import { getUserChoice } from "./events.js";

// let userChoice;
let computerChoice;
// const rockBtn = document.querySelector(".rock");
// const paperBtn = document.querySelector(".paper");
// const scissorsBtn = document.querySelector(".scissors");
// const player1 = document.querySelector("#player1");
// const player2 = document.querySelector("#player2");
const winText = document.querySelector("#win");
const loseText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");

function computerGuess() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = choiceArray[randomNum];
  animationStarter();
}

function showResultScreen() {
  const userChoice = getUserChoice();
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

export { computerGuess, showResultScreen };
