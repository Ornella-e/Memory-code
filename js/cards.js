const originalCards = [
  { name: "Javascript", images: "Javascript.png" },
  { name: "Css", images: "css.png" },
  { name: "Html", images: "html.png" },
  { name: "Visual Studio Code", images: "VSC.png" },
  { name: "Chrome", images: "Chrome.png" },
  { name: "Python", images: "Python.png" },
  { name: "C++", images: "c++.png" },
  { name: "Bash", images: "Bash.png" },
  { name: "Java", images: "Java.png" },
  { name: "git", images: "git.png" },
  { name: "gitHub", images: "github.png" },
  { name: "Ruby", images: "ruby.png" },
];
let cards = [...originalCards];
//starting a new game
const memoryCode = new MemoryCode(cards);

//buttons
const score = document.getElementById("pairs-clicked");
const startButton = document.querySelector(".start");
const restartButton = document.querySelector(".restart");
startButton.addEventListener("click", startGame);
restartButton.addEventListener('click',()=>{location.href='./index.html';});
const startLevelTwo=document.querySelector(".startLevelTwo");
startLevelTwo.addEventListener("click", startSecondGame);
let rightCards = document.querySelectorAll(".memory-cards");

function startGame() {
  createEventListeners();
  pickRandomCard();
  turnLeftCard();
}

function turnLeftCard() {
  setTimeout(() => {
    document.querySelector("#card-to-guess").innerHTML = "";
    turnAllCards();
  }, 1000);
}

function pickRandomCard() {
  let html = "";
  let randomLeftCard = cards[Math.floor(Math.random() * cards.length)];
  /*for (let i = 0; i < cards.length; i++){
    const leftCardRandomIndex = Math.floor(Math.random()*cards.length);
    randomLeftCard =cards[leftCardRandomIndex];
    oneLeftCard = randomLeftCard
   
  }*/
  html += `
  <p1 class="front-face" ></p1> 
  <img class="back-face" src="images/${randomLeftCard.images}" data-name="${randomLeftCard.name}">`;
  memoryCode.leftCard = randomLeftCard.name;
  document.querySelector("#card-to-guess").innerHTML = html;
}

let oneLeftCard;

function turnAllCards() {
  rightCards.forEach((card) => {
    if (!card.classList.contains("locked")) {
      card.classList.toggle("turn");
      setTimeout(() => {
        card.classList.toggle("turn");
      }, 1000);
    }
  });
}

let oneRightCard;
function turnCard(e) {
  if (!e.target.classList.contains("locked")) {
    e.target.classList.toggle("turn");
    if (memoryCode.checkIfMatched(memoryCode.leftCard, e.target.dataset.name)) {
      e.target.classList.add("locked");
      cards = cards.filter((card) => card.name != memoryCode.leftCard);
      scorePoints();
      if (memoryCode.score < 12) {
        pickRandomCard();
      }
      turnLeftCard();
     
    } else {
       //check if the player lose - if player picked wrong card
       document.querySelector(".loser").classList.remove("hidden");
       document.querySelector("#game-container").classList.add("hidden");
      setTimeout(() => {
        resetGame();
      }, 1000);
      
    }
    
  }
}
function createEventListeners() {
  rightCards.forEach((card) => card.addEventListener("click", turnCard));
}

//score function for matches
function scorePoints() {
  score.textContent = memoryCode.score;
  memoryCode.checkIfWon();
  memoryCode.checkIfWonSecondL();
}

//function to restart game
function resetGame() {
  rightCards.forEach((card) => {
    card.classList.remove("locked");
    card.classList.remove("turn");
  });
  cards = [...originalCards];
}

function startSecondGame() {
  document.querySelector('#game-container').classList.remove('hidden');
 document.querySelector('.winner').classList.add('hidden');
  resetGame();
  pickRandomCard();
  turnLeftCardSecL();
  turnAllCardsSecL();
  createEventListeners();
}
function turnLeftCardSecL() {
  setTimeout(() => {
    document.querySelector("#card-to-guess").innerHTML = "";
    turnAllCardsSecL();
  }, 800);
}
function turnAllCardsSecL() {
  rightCards.forEach((card) => {
    if (!card.classList.contains("locked")) {
      card.classList.toggle("turn");
      setTimeout(() => {
        card.classList.toggle("turn");
      }, 800);
    }
  });
}
function turnCardSecL(e) {
  if (!e.target.classList.contains("locked")) {
    e.target.classList.toggle("turn");
    if (memoryCode.checkIfMatched(memoryCode.leftCard, e.target.dataset.name)) {
      e.target.classList.add("locked");
      cards = cards.filter((card) => card.name != memoryCode.leftCard);
      scorePoints();
      if (memoryCode.score < 24) {
        pickRandomCard();
      }
      turnLeftCardSecL();
     
    } else {
       //check if the player lose - if player picked wrong card
       document.querySelector(".loser").classList.remove("hidden");
       document.querySelector("#game-container").classList.add("hidden");
      setTimeout(() => {
        resetGame();
      }, 1000);
      
    }
    
  }
}