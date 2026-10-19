"use strict";

// global variables 
let randomNum = 0;
let tries = 0;

// helper function
const getRandomInt = (max = 100) => {
    let num = Math.random() * max;  // get a random number between 0 and max
    num = Math.ceil(num);           // round up to nearest integer
    return num;
};

// event handler functions
const guessClick = () => {
    const guess = parseInt(document.querySelector("#number").value);

    let message = "";
    if (isNaN(guess)) {
        message = "Not a valid number. Please enter a valid number."
    } else if (guess < 1 || guess > 10) {
        message = "Invalid number. Enter a number between 1 and 10.";
    } else if (guess < randomNum) {
        message = "Too small. Try again.";
        tries++;
    } else if (guess > randomNum) {
        message = "Too big. Try again.";
        tries++;
    } else if (guess === randomNum) {
        tries++;
        const lastWord = (tries === 1) ? "try" : "tries";
        message = `You guessed it in ${tries} ${lastWord}!`;
    }
    document.querySelector("#message").textContent = message;
};

const playAgainClick = () => {
    randomNum = getRandomInt(10);
    tries = 0;
    document.querySelector("#number").value = "";
    document.querySelector("#message").textContent = "";
};

document.addEventListener("DOMContentLoaded", () => {
    playAgainClick(); // initial a new game

    document.querySelector("#guess").addEventListener(
        "click", guessClick);
    document.querySelector("#play_again").addEventListener(
        "click", playAgainClick);
});