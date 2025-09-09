//--------------------Excercise1-----------------------------------

const fullName = "Peter Heronimous Lind";

//Substring den tager 2 parameter, den vil så læse fra den første parameter til den 2. paramter i stringet, and extract that portion
//indexOf= pinpoint a specific place, space in a string

const firstName = fullName.substring(0, fullName.indexOf(" "));

const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);

//--------------------Excercise2-----------------------------------

const theName = "tHor";
const threeCapitalised1 = theName.substring(0, 2).toLowerCase();
const threeCapitalised2 = theName.substring(2, 3).toUpperCase();
const threeCapitalised3 = theName.substring(3).toLowerCase();

console.log(threeCapitalised1 + threeCapitalised2 + threeCapitalised3);

function normalCapitalise(theName2) {
  return theName2.substring(0, 1).toUpperCase() + theName2.substring(1).toLowerCase();
}

console.log(normalCapitalise("cHarles"));
