"use strict";

const scores = [];

// get scores from the user
while (true) {
    const entry = prompt("Enter a test score. Or, enter 'x' to exit.");
    if (entry === 'x' || entry === null) {
        break;
    }

    const score = parseInt(entry);
    if (score >= 0 && score <= 100) {
        scores[scores.length] = score;
    } else {
        alert("Score must by a valid number from 0 through 100.");
    }
}

// if there are no scores, notify user
if (scores.length === 0) {
    alert("You didn't enter any scores.");
} else {  // otherwise, calculate the total and create a display string 
    let total = 0;
    let scoresString = "";
    for (let i in scores) {
        total += scores[i];
        scoresString += `Score ${parseInt(i) + 1}: ${scores[i]}\n`;
    }
    const average = total/scores.length;

    // display the scores and their average
    alert(`${scoresString}Average score: ${average.toFixed(2)}`);
}