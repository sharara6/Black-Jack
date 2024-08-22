let firstCard = Math.floor( Math.random() * (12 - 2) + 2 )
let secondCard = Math.floor(Math. random() * (12 - 2) + 2 )
let sum = firstCard + secondCard;

let message = "";

let isAlive = true;
let hasBlackJack = false;

if (sum < 21) {
    message = "Do you want to draw a new card?";
}
else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
}
else {
    message = "You're out of the game!"
    isAlive = false;
}