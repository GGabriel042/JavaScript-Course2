const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

let count = 0;

function increment () {
  count ++;
  countEl.innerText = count;
}

function save() {
  let previousEntries = count + " - ";
  saveEl.textContent += previousEntries;
  count = 0;
  countEl.textContent = 0;
}

