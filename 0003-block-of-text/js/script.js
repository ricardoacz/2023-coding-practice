// getting html elements
const text = document.querySelector("#text")
const btn = document.querySelector("#btn")

// function to ask use to type
btn.addEventListener("click", () => {
    let newText = window.prompt('Write a message')
    text.innerText = newText
})