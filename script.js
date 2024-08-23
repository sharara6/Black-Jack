player = {
    name: "Per",
    chips: 145
}

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playrEl = document.querySelector("#player-el");

let sum = 0;
let cards = [];
let message = "";

let isAlive = false;
let hasBlackJack = false;


playrEl.textContent = player.name  + ": " + "$"+player.chips 

function getRandomCard() {
   let random = Math.floor( Math.random() * 13 + 1 )
    if (random === 1) {
        return 11
    }else if (random === 11 || random === 12 || random === 13) {
        return 10
    }
   return random;
}

function startGame() {
    if (isAlive === false || hasBlackJack === true) {
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        sum = firstCard + secondCard
        cards = [firstCard, secondCard]
        isAlive = true
        renderGame()
    }
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
    cardsEl.textContent = "Cards: " + cards[0]
    for (let i = 1; i < cards.length; i++) {
        cardsEl.textContent += ", " + cards[i] 
    }
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame()
    }
}




