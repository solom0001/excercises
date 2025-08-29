"strict";

// // const nameText = document.querySelector("#headtext");

// function greeting(firstname) {
//   return `Hello ${firstname}`;
// }

// // const result = greeting("Abby");
// // console.log(result);

// // greeting("Gabriel"); //Der sker intet fordi der er ikke console.logget

// // console.log(greeting("Gabriel")); //Funktionen bliver vist i log som normalt

// console.log(greeting()); //Hello undefined

const input = document.querySelector("#userInput");
const startButton = document.querySelector("#startButton");
const upButton = document.querySelector("#higherButton");
const downButton = document.querySelector("#lowerButton");
const gameResults = document.querySelector("#result");
const compShowGuess = document.querySelector("#compGuess");
const winText = document.querySelector("#winText");
let min = 0;
let max = 100;

// const userInput = parseInt(input.value);

function compGuess(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess() {
  const userInput = parseInt(input.value);
  let guess = compGuess(min, max);

  console.log("Comp valg= ", guess);

  if (userInput === guess) {
    winText.classList.remove("hidden");
    winText.textContent = `YOU GOT IT, IT WAS ${guess}`;
    gameResults.classList.add("hidden");
    console.log("you got itt");
    disableDownButton();
    disableupButton();
    compShowGuess.textContent = `AI guess= ${guess}`;
  } else if (userInput > guess) {
    console.log("you need to aim higher");
    enableHighButton();
    compShowGuess.textContent = `AI guess= ${guess}`;
    // gameResults.textContent = `YOU NEED TO AIM HIGHER`;
    min = guess + 1;

    //enable higher button
    //guess =new min
    //que you need to aim higher screen
  } else {
    console.log("you need to aim lower");
    enableLowButton();
    compShowGuess.textContent = `AI guess= ${guess}`;
    // gameResults.textContent = `YOU NEED TO AIM LOWER`;
    max = guess - 1;
    //enable lower button
    //guess =new max
    //que you need to aim lower screen
  }
}

function enableHighButton() {
  upButton.classList.remove("disabled");
  upButton.addEventListener("click", () => (gameResults.textContent = `YOU NEED TO AIM HIGHER`));
  disableDownButton();
  upButton.addEventListener("click", checkGuess);
}
function enableLowButton() {
  downButton.classList.remove("disabled");
  downButton.addEventListener("click", () => (gameResults.textContent = `YOU NEED TO AIM LOWER`));
  disableupButton();
  downButton.addEventListener("click", checkGuess);
}

// const startGame = () => startButton.addEventListener("click", checkGuess);
function startGame() {
  startButton.addEventListener("click", () => {
    disableupButton();
    disableDownButton();
    checkGuess();
    startButton.classList.add("disabled");
  });
}

const disableupButton = () => upButton.classList.add("disabled");
const disableDownButton = () => downButton.classList.add("disabled");

startGame();
