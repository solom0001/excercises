const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
const tr = document.querySelector("tr");
showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${sanitize(each.type)}</td>
  <td>${sanitize(each.fuel)}</td>
  <td>${sanitize(each.passengers)}</td> 
  <td>${sanitize(each.stops)}</td>
  <td>${sanitize(each.ownedBy)}</td>
  <td>${sanitize(each.isElectric)}</td>
  <td>${sanitize(each.isTandem)}</td>

  
   
</tr>`;
  });
}

function sanitize(str) {
  switch (str) {
    case undefined:
      return "";
    case true:
      return "X";
    default:
      return str;
  }
}

//a function that shows all electric vehicles

// boolean function om vehicle er electric
const isElectric = (vehicle) => {
  if (vehicle.isElectric === true) {
    return true;
  } else {
    return false;
  }
};

function showElectrics() {
  const nyArr = vehicles.filter(isElectric);
  console.log(nyArr);
}

// A function that shows all vehicles with more than 2 seats
// peer through the array, and if passengers >2, save it in a new array, and show it
function showAboveSeats(numb) {
  const sats = vehicles.filter((vehicle) => vehicle.passengers > 2);

  return sats;
}

//all vehicles owned by Jonas.
const jonasCars = vehicles.filter((vehicle) => vehicle.ownedBy === "Jonas");
const jonasElCars = jonasCars.filter(isElectric);

//all vehicles with rugbrød as fuel with more than 1 seat.
const rugFuel = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød").filter((vehicle) => vehicle.passengers > 1);
// const rugFuelSeats = rugFuel.filter(showAboveSeats);

// showAboveTwoSeats();
console.log(rugFuel);
