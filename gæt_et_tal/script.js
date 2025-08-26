const guess = document.getElementById("userGuess");
const checkBtn = document.getElementById("checkBtn");
const feedback = document.getElementById("feedback");

const randomNumb = () => console.log("tilfældigt tal " + Math.floor(Math.random() * 101));

let rdNumb = Math.floor(Math.random() * 100) + 1;

checkBtn.addEventListener("click", checkGuess);

function checkGuess() {
  //   guess.addEventListener("input", () => {
  //     if (guess != null && guess == Number) {
  //       checkGuess;
  //     } else {
  //       return console.error("The guess wasn't valid");
  //     }
  //   });
  const userGuess = parseInt(guess.value);

  if (userGuess === rdNumb) {
    feedback.textContent = `DU FIK PRÆCIS DEN RIGTIG som er ${rdNumb}`;
  } else if (userGuess < rdNumb) {
    feedback.textContent = `DESVÆRE VAR NUMMERET IKKE RIGTIGT, DEN VAR STØRRE END ${userGuess}`;
  } else if (userGuess > rdNumb) {
    feedback.textContent = `DESVÆRE VAR NUMMERET IKKE RIGTIGT, DEN VAR MINDRE END ${userGuess}`;
  }
}
