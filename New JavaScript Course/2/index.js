const textEl = document.getElementById("text-elmt");
const cardEl = document.getElementById("card-elmt");
const sumEl = document.getElementById("sum-elmt");
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";


for (i = 0; i < cards.length; i++) {
  sum += parseInt(cards[i]);
}


function newCard() {
  cards.push(getRandomCard());
  sum += cards[cards.length - 1];
  checkScore();
  renderGame();
}


function resetGame() {
  cards = [];
  sum = 0;
  message = "Want to play a round?"
  renderGame();
}


function renderGame() {
  
  cardEl.textContent = "Cards: "
  
  for (i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  
  textEl.textContent = message;
  
}

function checkScore() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "BlackJack";
    hasBlackJack = true;
  } else {
    message = "You Lose";
    isAlive = false;
  }
}



function getRandomCard() {
  const randomNum = Math.floor( Math.random()*13) + 1;

  if (randomNum === 1) {
    return 11;
  } else if (randomNum === 11 || randomNum === 12 || randomNum === 13) {
    return 10
  } else {
    return randomNum;
  }
}