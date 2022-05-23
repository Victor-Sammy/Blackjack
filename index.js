let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let mesageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
// because it's an object
let player = {
    name: "Vic",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " $" + player.chips

// make the function return a random number between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if ( randomNumber > 10) {
        return 10
    } else if ( randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    mesageEl.textContent = message
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}