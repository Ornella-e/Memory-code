class MemoryCode {
    constructor(cards){
        this.cards=cards;
        this.leftCard = [];
        this.rightCards  = [];
        this.score = 0;
    } 
 
    checkIfMatched(randomLeftCard,randomRightCard){
        if (randomLeftCard === randomRightCard){
        this.score ++;
        return true;
        }
        return false;
    }

    
    checkIfWon(){
        if (this.score === 12){ 
            document.querySelector('.winner').classList.remove('hidden');
            document.querySelector('#game-container').classList.add('hidden');
            document.querySelector(".startLevelTwo");
        }    
        
    }  
    checkIfWonSecondL(){
        if (this.score === 24){   
            document.querySelector('.winner').classList.remove('hidden');
            document.querySelector('#game-container').classList.add('hidden');  
        }    
        
    }  
   
}
