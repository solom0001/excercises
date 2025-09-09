document.querySelector("button").addEventListener("click", klik);

function klik() {
  //   console.log(document.querySelector("h1").dataset.filter);
  if (document.querySelector("h1").dataset.filter === "bat") {
    document.querySelector("h1").dataset.filter = "fox";
  } else if (document.querySelector("h1").dataset.filter === "fox") {
    document.querySelector("h1").dataset.filter = "bat";
  }
}
