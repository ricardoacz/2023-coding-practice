// Getting elements from html

let coin = document.querySelector(".coin")
let flipBtn = document.querySelector("#flip-button")
let resetBtn = document.querySelector("#reset-button")

// Score
let heads = 0
let tails = 0

flipBtn.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 2)
    console.log(x)

    coin.style.animation = 'none'

    if (x > 0) {
        setTimeout(function() {
            coin.style.animation = 'spin-heads 3s forwards'
        }, 100)
        heads++
        
    } else {
        setTimeout(function() {
            coin.style.animation = 'spin-tails 3s forwards'
        }, 100)
        tails++
        
    }
    setTimeout(updateStats, 3000)
    disableButton()
})

function updateStats() {
    document.querySelector("#heads-count").innerText = `Heads | Yes: ${heads}`
    document.querySelector("#tails-count").innerText = `Tails | No: ${tails}`
    message()
}

function disableButton() {
    flipBtn.disabled = true
    setTimeout(function() {
        flipBtn.disabled = false
    }, 3000)
}

resetBtn.addEventListener('click', () => {
    coin.style.animation = 'none'
    heads = 0
    tails = 0
    updateStats()
    document.querySelector("#message").innerText = ""
})

console.log('hello world')

function message() {
    if (heads > tails && heads === 2) {
        document.querySelector("#message").innerText = `Ricardo will go to wushu on Sunday, making the comeback of a lifetime lol`
    } else if (tails > heads && tails === 2) {
        document.querySelector("#message").innerText = `You know? This is dumb, just go to wushu on Sunday!`
    }
}