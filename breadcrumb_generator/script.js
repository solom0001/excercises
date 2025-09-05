const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", klik);

//ved klik, læse arrayet
// generer en breadcrumb string som er klikbare

function klik() {
  let str = "";
  //&nbsp;
  console.log(str);

  bc.forEach((elm, i) => {
    if (i === bc.length - 1) {
      str += `<li>${elm.name}&nbsp;</li>`;
    } else {
      str += `<li><a href="${elm.link}"> ${elm.name}</a>&nbsp/</li>`;
    }
  });
  console.log(str);
  document.querySelector("ul").innerHTML = str;
}
