console.log("Up");

var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage:'images/queen-of-hearts.png'
  },
  {
    rank:'queen',
    suit:'diamonds',
    cardImage:'images/queen-of-diamonds.png'
  },
  {
    rank:'king',
    suit:'hearts',
    cardImage:'images/king-of-hearts.png'
  },
  {
    rank:'king',
    suit:'diamonds',
    cardImage:'images/king-of-diamonds.png'
  }
];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[3];
var cardFour = cards[2];

function checkForMatch(){

if (cardsInPlay.length > 1){
  if(cardsInPlay[0] === cardsInPlay[1]){
    var length = cardsInPlay.length;
      // alert("Lucky You!");
      document.getElementById('alert').innerHTML = "Lucky You!";
      checkForReset(length);
    }else if(cardsInPlay.length > 2){
      // alert("will now RESET please try again.");
      document.getElementById('alert').innerHTML = "WRONG!!";
      var length = cardsInPlay.length;
      checkForReset(length);
    }else{
      document.getElementById('alert').innerHTML = "WRONG!!";
      // alert("WRONG!!");
      var length = cardsInPlay.length;
      checkForReset(length);
      console.log(length);
    }
  }
};

function flipCard(){

var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
    console.log("You flipped a" + " " + cards[cardId].rank + " " + "of" + " " + cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
  console.log(cards[cardId].cardImage);
};

function createBoard(){

  for (i = 0; i <= cards.length-1; i++ ){
    var cardElement = document.createElement('img');// creates empty img element
    cardElement.setAttribute('src', 'images/back.png'); // gives img source
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener('click', flipCard); // listener to run flip card
    var imgDiv = document.getElementById('game-board');//append new img to div
      imgDiv.appendChild(cardElement);
  }
};

function checkForReset(length){
  if(length === 2){
    window.setTimeout(resetPage, 1500);
}
};

createBoard();



function resetPage(){
  document.getElementById('game-board').innerHTML = " ";
  document.getElementById('alert').innerHTML = " ";
  cardsInPlay = [];
  createBoard();
};

 // var resetButton = document.getElementById('reset');
 // resetButton.addEventListener('click', resetPage);
