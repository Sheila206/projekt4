//inspireret af MDN.com underside Document:querySelector() method
//inspireret af youtube video: "How to Create a Drop-down List with Array Values using JavaScript | Drop Down list in JavaScript - Dcode Show"
const prisSelect = document.querySelector("#prisSelect");
const valgtPris = document.querySelector("#valgtPris");

const buketter = [
  { navn: "Vælg buket", pris: "" },
  { navn: "Lille buket", pris: 250 },
  { navn: "Mellem buket", pris: 300 },
  { navn: "Stor buket", pris: 350 },
  { navn: "Ekstra stor", pris: 400 }
];

// Loop der opretter dropdown options
for (let i = 0; i < buketter.length; i++) {
  let option = document.createElement("option");
  option.textContent = buketter[i].navn;
  option.value = buketter[i].pris;
  prisSelect.appendChild(option);
}

// Viser valgt pris
function visPris() {
  if (prisSelect.value === "") {
    valgtPris.textContent = "";
  } else {
    valgtPris.textContent = "Pris: " + prisSelect.value + " kr";
  }
}

prisSelect.addEventListener("change", visPris);