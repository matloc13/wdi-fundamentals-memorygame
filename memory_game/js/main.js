console.log("Up and Running");

var cards = ['queen','queen','king','king'];
var cardsInPlay = []

var cardOne = cards[0];
var cardTwo = cards[3];
var cardThree = cards[2];
var cardFour = cards[1];

function checkForMatch(){
    if(cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
    }else{
      alert("Sorry Try Again");
    }
};

function flipCard(cardId){
  checkForMatch();
  console.log("You flipped a" + " " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);

};

flipCard(0);
flipCard(2);
