Memory Code 

Description:
Memory Code is a dynamic game which consists of cards with different coding logos. The player has a board with 12 cards on one side and 1 card on the other side. Both will be shown one second each, first the one card and 
then the board. Everytime the player needs to guess which cards match. 


MVP
DOM
-> game has one card on one side and a board on the other
-> the cards are shown for one second 
-> the board is shown and the player chooses a card
-> if the player guesses the 12 cards he wins
-> if the player chooses wrong needs to restart the game


Backlog
->increase level of dificulty if the player wins
->sound 

Data structure
splash.js
.eventListener()

Game.js -> The main file of the game
. Class MemoryCode {}
. checkIfMatched (){}
. checkIfWon(){}


Cards.js -> All functions related to the movement of the cards 
. startGame (){}
. turnLeftCard (){}
. pickRandomCard(){}
. turnAllCards(){}
. turnCard(){}
. createEvenListeners(){}
. scorePoints (){}
. resetGame(){}

Canvas.js
. draw(){}


Styles.css
. body
. splash
. buttons
. memory-cards
. memory-board
. card-to-guess
. score
. winner
. loser

Images


States y State Transitions
. splashScreen
. gameScreen
. gameoverScreen
. winScreen

Links: 

https://trello.com/b/MO88ooDc/memory-code
https://ornella-e.github.io/Memory-code/
https://slides.com/ornella_e/bold-349b15




