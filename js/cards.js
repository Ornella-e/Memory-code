const originalCards = [
    { name: 'Javascript', images: 'Javascript.png' },
    { name: 'Css',  images: 'css.png' },
    { name: 'Html',  images: 'html.png' },
    { name: 'Visual Studio Code',  images: 'VSC.png' },
    { name: 'Chrome', images: 'Chrome.png' },
    { name: 'Python', images: 'Python.png' },
    { name: 'C++', images: 'c++.png' },
    { name: 'Bash', images: 'bash.png' },
    { name: 'Java', images: 'Java.png' },
    { name: 'git', images: 'git.png' },
    { name: 'gitHub', images: 'github.png' },
    { name: 'Ruby', images: 'ruby.png' }
  ];
  let cards = [...originalCards]
  //starting a new game
  const memoryCode = new MemoryCode(cards); 
  
  //buttons
  const score=document.getElementById('pairs-clicked');
  const startButton = document.querySelector('.start');
  const restartButton = document.querySelector('.restart');
  startButton.addEventListener('click', startGame)
  
  let rightCards = document.querySelectorAll('.memory-cards');
  
  function startGame() {
    createEventListeners()
    pickRandomCard()
    turnLeftCard()
  }
  
  function turnLeftCard() {
  setTimeout(() => {
    document.querySelector('#card-to-guess').innerHTML = ''
    turnAllCards()
  }, 3000)
}


function pickRandomCard() {
  let html= "";
  let randomLeftCard = cards[Math.floor(Math.random() * cards.length) ]
  /*for (let i = 0; i < cards.length; i++){
    const leftCardRandomIndex = Math.floor(Math.random()*cards.length);
    randomLeftCard =cards[leftCardRandomIndex];
    oneLeftCard = randomLeftCard
   
  }*/
  html += `
  <p1 class="front-face" ></p1> 
  <img class="back-face" src="images/${randomLeftCard.images}" data-name="${randomLeftCard.name}">`;
  memoryCode.leftCard = randomLeftCard.name
  document.querySelector('#card-to-guess').innerHTML=html;
  }

  let oneLeftCard; 


  function turnAllCards(){
    rightCards.forEach((card)=> {
      if (!card.classList.contains('locked')) {
        card.classList.toggle('turn');
        setTimeout(() => {
          card.classList.toggle('turn');
        }, 3000);
      }
    })
  }
  
  let oneRightCard;
  function turnCard (e){
    if (!e.target.classList.contains('locked')) {
      e.target.classList.toggle('turn'); 
     if (memoryCode.checkIfMatched(memoryCode.leftCard, e.target.dataset.name)) {
       e.target.classList.add('locked')
      cards = cards.filter(card =>card.name != memoryCode.leftCard)
      scorePoints()
       pickRandomCard()
       turnLeftCard()
       
     }
     else {
       setTimeout(() => {
         resetGame(); 
       },1000)
     }
    }

 }
 function createEventListeners () {
   rightCards.forEach(card =>card.addEventListener('click',turnCard));

 }

  //score function for matches
function scorePoints(){
  score.textContent=memoryCode.score;
}

 

  //function to restart game
  function resetGame(){
    rightCards.forEach(card => {
      card.classList.remove('locked');
      card.classList.remove('turn');
    })
    cards=[...originalCards];
  }


  
