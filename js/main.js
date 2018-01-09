var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "image/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "image/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("you found match");
  } else {
    alert("sorry try again");
  }
};
// created flipCard function
var flipCard = function (cardId) {
  console.log("user flipped " + cards[cardId].rank); 
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage)
console.log(cards[cardId].suit)
   if (cardsInPlay[0] === cardsInPlay[2]) {
  checkForMatch();
}
}

flipCard(0);
flipCard(2);