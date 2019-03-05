




var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {   
        console.log("You found a match");
        alert("You found a match");
        } else {
        console.log("Sorry, try again");
        alert("Sorry, try again");
        }
};

function flipCard(cardId){
console.log("User flipped " + cards[cardId])
cardsInPlay.push(cards[cardId]);
/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("user flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardTwo);*/
}



