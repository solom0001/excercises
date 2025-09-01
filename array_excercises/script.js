// let letters = ["a", "b", "c", "d", "e", "f", "g"];
// console.log(letters[4]);                  //logger 'e' i consolen da den ligger no.4 index i arrayet

// let newarr = letters;
// newarr[4] = "*";

// console.log(letters[4]);                    //logger 'x' i newarr har gjort index 4='*'
//----------------------------------------------------------------------------------------------------------------------------------------------

/////////////PUSH

// const people = ["john", "stewert", "Madeline"];

// let result;

// result = people.push("Cyborg");

// console.log("RESULT: ", result);               //Viser 4, fordi der er nu 4 elementer i arrayet.
// console.log("RESULT: ", people);               //Tilføjer/putter "Cyborg" SIDSTE ind i arrayet uden at fjern andre elementer

//----------------------------------------------------------------------------------------------------------------------------------------------

/////////////POP

// const people = ["john", "stewert", "Madeline"];

// let result;

// result = people.pop();

// console.log("RESULT: ", result); //Viser Madeline fordi den var fjernet fra arrayet og er lig med result.
// console.log("RESULT: ", people); //fjerner den SIDSTE index i arrayet som nu her er 'Madeline'

//----------------------------------------------------------------------------------------------------------------------------------------------

/////////////SPLICE

// const arr = ["cat", "dog", "bird", "fish", "horse"];
// const newArr = arr;
// arr.splice(1, 2);

// console.log("arr: ", arr); //splice gør at den i Arrayet fjerner elementet på dden 'splice(x,y)' x'et index og gør det samme 'y' antal gange
// console.log("newArr: ", newArr); // for begge vil den fjern "dog", fordi den ligger på index 1

//---------------------------------------

// const people = ["john", "stewert", "Madeline", "Abby", "Kevin"];

// let result;

// result = people.splice(1, 2, "Harriet");

// console.log("RESULT: ", result); //den i Arrayet fjerner elementet på index 1 og 2 frem
// console.log("RESULT: ", people); //den i Arrayet fjerner elementet på index 1 og 2 frem og indsætter "Harriet"

//----------------------------------------------------------------------------------------------------------------------------------------------

const people = ["john", "stewert", "Madeline", "Abby", "Kevin"];

let result;

result = people.slice(0, 3);

console.log("RESULT: ", result); //den i Arrayet fjerner elementet på index 1 og 2 frem
console.log("RESULT: ", people); //den i Arrayet fjerner elementet på index 1 og 2 frem og indsætter "Harriet"
