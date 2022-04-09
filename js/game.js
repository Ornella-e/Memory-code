class MemoryCode {
    constructor(cards){
        this.cards=cards;
        this.leftCard = [];
        this.rightCards  = [];
        this.score = 0;
    } 

    //add methods
 
   
    //check if they matched
    checkIfMatched(randomLeftCard,randomRightCard){
        if (randomLeftCard === randomRightCard){
        this.score ++;
        return true;
        }
        return false;
    }

    //check if the player won - if player reaches 12 points
    checkIfWon(){
        if (this.score === 12){
            console.log ("Congratulations!You won!");
            document.querySelector('.winner').classList.remove('hidden');
            document.querySelector('#game-container').classList.add('hidden');
        }    
        
    }   
   
}
