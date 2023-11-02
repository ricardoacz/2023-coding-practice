// Global variables
let outcome = ""
let humanScore = 0
let computerScore = 0
let scoreText = ": 0 | Computer: 0"

// Class to create the players. This will be use to for the human player and machine player.
class Player {
    constructor (hand) {
        this.hand = hand.toLowerCase()
    }
    choice () {
        const options = ['rock', 'paper', 'scissors']
        this.hand = options[Math.floor(Math.random() * 3)]
    }
}

// Play the game. Game logic. User inputs their choice and player objects are created.
function play (choice) {
    let human = new Player(choice)
    let computer = new Player("")
    computer.choice()

    if (human.hand === computer.hand) {
        outcome = `You picked ${human.hand}, computer picked ${computer.hand}. It's a tie!`
        updateMessage()
        return "It's a tie!"
    } else if (human.hand === 'rock' && computer.hand === 'scissors'
    || human.hand === 'paper' && computer.hand === 'rock'
    || human.hand === 'scissors' && computer.hand === 'paper') {
        outcome = `You picked ${human.hand}, computer picked ${computer.hand}. You win!`
        updateMessage()
        humanScore++
        scoreText = `: ${humanScore} | Computer: ${computerScore}`
        updateScore()
        return "You win!"
    } else {
        outcome = `You picked ${human.hand}, computer picked ${computer.hand}. Computer wins!`
        updateMessage()
        computerScore++
        scoreText = `: ${humanScore} | Computer: ${computerScore}`
        updateScore()
        return "Computer wins!"
    }
    
}

// Html and user-interface stuff
const userName = document.querySelector("#human-name")
const outcomeMessage = document.querySelector("#game-outcome")
const score_text = document.querySelector("#score-text")
const rock_image = document.querySelector("#rock")
const paper_image = document.querySelector("#paper")
const scissors_image = document.querySelector("#scissors")

// Event listeners
userName.addEventListener("click", inputName)
rock_image.addEventListener('click', () => {play('rock')})
paper_image.addEventListener('click', () => {play('paper')})
scissors_image.addEventListener('click', () => {play('scissors')})

function inputName () {
    let name = window.prompt('Please enter your name:')
    if (name) {
        userName.innerText = name
    }
}

function updateMessage () {
    outcomeMessage.innerText = outcome
}

function updateScore() {
    score_text.innerText = scoreText
}