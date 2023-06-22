/* let pessoa = {
  nome: 'gabriel',
  age: 24,
  country:  'Brasil'
}

function logData() {
  console.log(pessoa.nome + " is " + pessoa.age + ' years old and lives in ' + pessoa.country);
}

logData()
 */



/* let age = 5;

if (age < 6) {
  console.log('free')
} else if (age < 18) {
  console.log('child discount')
} else if (age < 27) {
  console.log('student discount')
} else if (age < 67) {
  console.log('full price')
} else {
  console.log('Senior citzen discount')
}  */






/* let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries.shift();
largeCountries.unshift("China");
largeCountries.pop();
largeCountries.push("Pakistan")


for (let i = 0; i < largeCountries.length; i++) {
  console.log(largeCountries[i]);
} */



/* let dayOfMonth = 13
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("😱")
} else {
  console.log("Just another day")
} */





/* let hands = ["rock", "paper", "scissors"]

function playGame() {
  let randomNum = Math.floor(Math.random() * 3);
  return hands[randomNum];
}

console.log(playGame()); */


let fruit = ["🍎", "🍊", "🍎", "🍊", "🍎"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")


function addItems() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += "🍎";
    } else {
      orangeShelf.textContent += "🍊";
    }
  }
}

addItems();

