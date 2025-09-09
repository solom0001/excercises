document.querySelector("#themes").addEventListener("change", selectTheme);
// const theme = document.querySelector("body").dataset.filter;

function selectTheme() {
  const value = document.querySelector("#themes").value;
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
