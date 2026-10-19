"use strict";

// global variables 
let randomNum = 0;

// helper function
const getRandomInt = (max = 100) => {
    let num = Math.random() * max;  // get a random number between 0 and max
    num = Math.ceil(num);           // round up to nearest integer
    return num;
};

const getGuess = () => {
    const guess = parseInt(document.querySelector("#number").value);
    if (isNaN(guess)) {
        throw new Error("Not a valid number. Please enter a valid number.");
    } else if (guess < 1 || guess > 10) {
        throw new RangeError("Invalid number. Enter a number between 1 and 10.");
    }
    return guess;
};

// event handler functions
const guessButtonClick = () => {
    // clear messages
    document.querySelector("#error_message").textContent = "";
    document.querySelector("#message").textContent = "";

    const guess = getGuess();

    let message = "";
    if (guess < randomNum) {
        message = "Too small. Try again.";
    } else if (guess > randomNum) {
        message = "Too big. Try again.";
    } else if (guess === randomNum) {
        message = "You guessed it!";
    }
    document.querySelector("#message").textContent = message;
};

const playAgainButtonClick = () => {
    randomNum = getRandomInt(10);
    document.querySelector("#number").value = "";
    document.querySelector("#message").textContent = "";
};

document.addEventListener("DOMContentLoaded", () => {
    randomNum = getRandomInt(10); 

    document.querySelector("#guess").addEventListener(
        "click", guessButtonClick);
    document.querySelector("#play_again").addEventListener(
        "click", playAgainButtonClick);
});