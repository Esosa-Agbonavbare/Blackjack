let message, sum, cards, isAlive, hasBlackJack, disp, cardsEl, total, playerEl, player;
message = "";
sum = 0;
cards = [];
isAlive = false;
hasBlackJack = false;
disp = document.getElementById("display");
cardsEl = document.getElementById("cards");
total = document.getElementById("total");
playerEl = document.getElementById("player-info");
player = {
    name: "Player", 
    chips: 500
};
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCards() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    }else if (randomNumber === 1) {
        return 11;
    }else {
        return randomNumber;
    }
}

function dealCards() {
    let firstCard, secondCard;
    isAlive = true;
    firstCard = getRandomCards();
    secondCard = getRandomCards();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard]
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    total.textContent = "Sum: " + sum;

    if (sum < 21) {
        message = "Draw a new card.";
    }else if(sum === 21) {
        message = "You've got blackjack!";
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game!";
        isAlive = false;
    }
    disp.textContent = message;
}

function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let newCard = getRandomCards();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}