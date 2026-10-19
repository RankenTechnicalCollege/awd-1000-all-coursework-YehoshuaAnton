"use strict";

const scores = [];

while (true) {
    const entry = prompt("Enter a test score. Or, enter 'x' to exit.");
    if (entry === 'x' || entry === null) {
        break;
    }

    const score = parseInt(entry);
    if (score >= 0 && score <= 100) {
        scores.push(score);
    } else {
        alert("Score must by a valid number from 0 through 100.");
    }
}

const len = scores.length;
if (len === 0) {
    alert("You didn't enter any scores.");
} else {
    // calculate total and average
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    const average = total/len;

    // get the last 3 scores in reverse order
    const lastScores = (len <= 3) ? scores.slice() : scores.slice(len - 3, len); 
    lastScores.reverse();

    // display score data
    alert("Scores: " + scores.join(", ") + "\n" +
        "Total: " + total + "\n" +
        "Average: " + average.toFixed(2) + "\n" +
        "Last 3: " + lastScores.join(", "));
}