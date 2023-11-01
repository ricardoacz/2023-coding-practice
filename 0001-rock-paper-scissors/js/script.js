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