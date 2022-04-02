class MemoryCode {
    constructor(cards){
        this.cards=cards;
        this.leftCard =[];
        this.rightCards  = [];
        this.score = 0;
    } 

    //add methods
    //mix cards
    mixCards (){
        //first choose a random card for left side
        for (let i = 0; i < this.cards.length; i++){
            const leftCardRandomIndex = Math.floor (Math.random()* this.cards.length);
            const leftCardRandom =this.cards [leftCardRandomIndex];
            this.cards [leftCardRandomIndex] = this.cards [i];
            this.cards [i]=leftCardRandom;
        }
        //second choose a random card for right side
        for (let i = 0; i < this.cards.length; i++){
            const rightCardsRandomIndex = Math.floor (Math.random()* this.cards.length);
            const rightCardsRandom =this.cards [rightCardsRandomIndex];
            this.cards [rightCardsRandomIndex] = this.cards [i];
            this.cards [i]=rightCardsRandom;
        } 
    }
    //check if they matched
    checkIfMatched(leftCard,rightCards){
        if (leftCard === rightCards){
        this.score ++;
        return true;
        }
        return false;
    }
    //check if the player won - if player reaches 12 points
    checkIfWon (){
        if (this.score === 12){
            console.log ("Congratulations!You won!");
        }
    }
    //check if the player lose - if player picked wrong card
    checkIfLose () {
        return this.leftCard != this.rightCards
    }
}