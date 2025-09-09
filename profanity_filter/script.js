const text = document.querySelector("#text");

// const curseWords = [
//   { bad: "var", good: "const" },
//   { bad: "float", good: "grid" },
//   { bad: "marquee", good: "just don't" },
// ];

function insertText() {
  return (text.innerHTML = `Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.`);
}
insertText();
