"use strict";

// get a random number between 1 and 20
const num = Math.ceil(Math.random() * 20); 

// get the computer's guess 
const computerGuess = Math.ceil(Math.random() * 20); 

// get the user's guess
const userGuess = parseInt(prompt("Enter a number between 1 and 20"));

if (isNaN(userGuess)) {
        alert("Not a valid number. Computer wins.")
    } else if (userGuess < 1 || userGuess > 20) {
        alert("Not a number between 1 and 20. Computer wins.");
    } else {
        let message = "The number is " + num + ".\n" +
        "You guessed " + userGuess + 
        " and the computer guessed " + computerGuess + ".\n";
        
        // compute the difference between the guesses and the number
        const computerDiff = Math.abs(num - computerGuess);
        const userDiff = Math.abs(num - userGuess);
        
        // determine the winner and notify the user
        if (userDiff === computerDiff) {
            message += "It's a tie.";
    } else if (userDiff < computerDiff) {  // user's guess is closer
        message += "You WIN!";
    } else {
        message += "Computer wins.";
    }
    alert(message);
}

