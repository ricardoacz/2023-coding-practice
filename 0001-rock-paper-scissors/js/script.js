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
        return "It's a tie!"
    } else if (human.hand === 'rock' && computer.hand === 'scissors'
    || human.hand === 'paper' && computer.hand === 'rock'
    || human.hand === 'scissors' && computer.hand === 'paper') {
        return "You win!"
    } else {
        return "Computer wins!"
    }
    
}

// Html and user-interface stuff
const userName = document.querySelector("#human-name")
userName.addEventListener("click", inputName)

function inputName () {
    let name = window.prompt('Please enter your name:')
    if (name) {
        userName.innerText = name
    }
}