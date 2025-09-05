"use strict";
const dropElm = document.querySelector(".langD");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";
const foreign = "de";
console.log(texts[locale].texts);

function insertTxt() {
  // const nyObj =texts.map((elm)=>{
  //   header.innerHTML +=`
  //   <h1>${locale.}</h1>`
  // });
  // header.textContent = `This is it`;
  // footer.textContent = `This is it`;
}
insertTxt();
// dropElm.addEventListener("change");
