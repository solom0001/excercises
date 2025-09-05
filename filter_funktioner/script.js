//-Higher Order functions
//-De er  functions der tager en anden function som parameter såsom: 'setTimeout', 'setInterval', 'addEventListener',og
//   array methoderne

//Methoder på array objectet der tager en function paramteter:

//------forEach---------->

//forEach looper igennem hele arrayet, og gennemgår ens ønsker for hvert element i arrayet

// const people = ["Cindy", "Mary", "Carl", "Harry"];

// function sayHello(person) {
//   console.log(`Hello ${person}`);
// }

// people.forEach(sayHello); //here vil den så log 'Hello (navn)' for hvert element.

//------------------------------------------------

// const people = ["Cindy", "Mary", "Carl", "Harry"];

// function testParams(a, b, c, d) {
//   console.log(`a:${a}, b:${b}, c:${c}, d:${d},`);
// }

// people.forEach(testParams); //Når man bruger forEach i javaScript, dens callback accepter op til kun 3 elementer:

//array.forEach((element, index, array) => {
// element = current value
// index   = current index
// array   = the array being looped over
//});

// I den overstående eksempel, dens callback vil giv value=(navn) på a, index(position i arrayet) på b, og hele arrayets
//   indhold på c. d vil så bare give undefined.

//-------------------------------------------------------------------------------------------------------------------

//------.filter---------->
const animals = [
  {
    name: "mandu",
    type: "cat",
  },
  {
    name: "mia",
    type: "cat",
  },
  {
    name: "mona",
    type: "dog",
  },
  {
    name: "Freddie",
    type: "dog",
  },
  {
    name: "lisa",
    type: "cat",
  },
];

// function all(animal) {
//   return true;
// }
// function none(animal) {
//   return false;
// }

// function isCat(animal) {
//   if (animal.type === "cat") {
//     return true;
//   } else {
//     return false;
//   }
// }

// const nyArr=[];
// animals.map((elm)=>{
//   if(elm.type==="cat"){
//     nyArr.push(elm);
//   }else{
//     return
//   }
// })

function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}

console.log("ALL: ", animals.filter(isDog));
