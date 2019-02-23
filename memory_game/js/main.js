console.log("Up and Running");

//var cards = ['queen','queen','king','king'];
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank:'queen',
    suit:'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank:'king',
    suit:'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank:'king',
    suit:'diamonds',
    cardImage:'images/king-of-diamonds.png'
  }
];
var cardsInPlay = []

var cardOne = cards[0];
var cardTwo = cards[3];
var cardThree = cards[2];
var cardFour = cards[1];

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
    }else{
      alert("Sorry Try Again");
    }
};

function flipCard(cardId){

  checkForMatch();

  console.log("You flipped a" + " " + cards[cardId].rank + " " + "of" + " " + cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);

};

flipCard(0);
flipCard(2);
