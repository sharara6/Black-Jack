let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");


let firstCard = Math.floor( Math.random() * (12 - 2) + 2 )
let secondCard = Math.floor(Math. random() * (12 - 2) + 2 )
let sum = firstCard + secondCard;

let cards = [firstCard, secondCard];

let message = "";

let isAlive = true;
let hasBlackJack = false;

function startGame() {
    renderGame()
}


function renderGame(){
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
    cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1]
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message
}

function newCard(){
    let card = Math.floor(Math.random() * (12 - 2) + 2 );
    cards.push(card);
    sum += card;
    renderGame()
}

