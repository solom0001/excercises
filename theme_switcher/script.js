const storedTheme = localStorage.getItem("storedTheme");
// console.log("storedTheme", storedTheme);

document.querySelector("#themes").addEventListener("change", selectTheme);
// const theme = document.querySelector("body").dataset.filter;

if (storedTheme !== null) {
  document.querySelector("body").dataset.filter = storedTheme;
} else {
  selectTheme();
}

function selectTheme() {
  const value = document.querySelector("#themes").value;

  console.log("chosenTheme", value);
  localStorage.setItem("storedtheme", value);
  document.querySelector("body").dataset.filter = value;

  /*      switch (value) {
    case "light":
      document.querySelector("body").dataset.filter = "light";
      break;
    case "dark":
      document.querySelector("body").dataset.filter = "dark";
      break;
    case "hawaii":
      document.querySelector("body").dataset.filter = "hawaii";
      break;

    default:
      document.querySelector("body").dataset.filter = "light";
  }
      */
}
