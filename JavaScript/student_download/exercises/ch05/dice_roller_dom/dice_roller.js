"use strict";

// add a function named rollDie()

// add a function named rollDice() that calls rollDie()

const rollButtonClick = () => {
    const numDice = parseInt(document.querySelector("#num_dice").value);

    // remove this statement after confirming it works
    document.querySelector("#message").textContent = "Roll button clicked!";

    // check if sides is NaN

    // use rollDice() to get the values of the dice and then display them
}

document.addEventListener("DOMContentLoaded", () => {
    
    // remove this statement after confirming it works
    document.querySelector("#message").textContent = "DOM is loaded and ready!";
    
    // add rollButtonClick() function as an event handler
})