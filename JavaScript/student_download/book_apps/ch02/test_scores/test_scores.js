"use strict";

// initialize total variable
let total = 0;

//get 3 scores from user and add them together
const score1 = parseInt(prompt("Enter first test score"));
total += score1;

const score2 = parseInt(prompt("Enter second test score"));
total += score2;

const score3 = parseInt(prompt("Enter third test score"));
total += score3;

//calculate the average
const average = Math.round(total/3);

// display the scores
const result = "Score 1 = " + score1 + "\n" +
               "Score 2 = " + score2 + "\n" +
               "Score 3 = " + score3 + "\n" +
               "Average score = " + average;

alert(result);