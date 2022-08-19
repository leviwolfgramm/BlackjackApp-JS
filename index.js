let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player =
{
    name: "Levi",
    chips: 145
}

let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard()
{
    randomNum = Math.floor(Math.random()*13) + 1
    if(randomNum === 1)
    {
        return 11
    }
    if(randomNum > 10)
    {
        return 10
    }
    return randomNum
}

function startGame() {
    isAlive = true
    let firstNumber = getRandomCard()
    let secondNumber = getRandomCard()
    cards = [firstNumber, secondNumber]
    sum = firstNumber + secondNumber
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Would you like to draw a new card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if(isAlive && hasBlackJack === false)
    {
        let card = getRandomCard()

        sum += card
        cards.push(card)
        console.log(cards)

        renderGame()
    }
}



// left off at 4:11:11 in video https://www.youtube.com/watch?v=jS4aFq5-91M