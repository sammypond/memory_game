


var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];
cardsInPlay.push('king');
cardsInPlay.push('queen');
console.log('user flipped queen');
console.log('user flipped king');

if (cardsInPlay.length === 2) {   
    if (cardOne === cardTwo) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again!");
    }
}