// Get the elements from the document
const heads = document.getElementById("heads");
const tails = document.getElementById("tails");
const flip = document.getElementById("flip");
const result = document.getElementById("result");

// Add an event listener to the button
flip.addEventListener("click", function() {
    // Generate a random number between 0 and 1
    let random = Math.random();
    // If the number is less than 0.5, show heads and hide tails
    if (random < 0.5) {
        heads.style.zIndex = 1;
        tails.style.zIndex = 0;
        result.textContent = "Heads";
    }
    // Otherwise, show tails and hide heads
    else {
        heads.style.zIndex = 0;
        tails.style.zIndex = 1;
        result.textContent = "Tails";
    }
    // Add a class to the coin div to trigger the animation
    document.querySelector(".coin").classList.add("flip");
    // Remove the class after 1 second to reset the animation
    setTimeout(function() {
        document.querySelector(".coin").classList.remove("flip");
    }, 1000);
});
