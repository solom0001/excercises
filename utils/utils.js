//querrySelector

export function $(str) {
  return document.querySelector(`${str}`);
}

export function addToNumbers(a, b) {
  return a + b;
}

export function subToNumbers(a, b) {
  return a - b;
}

export function randomNumb(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
