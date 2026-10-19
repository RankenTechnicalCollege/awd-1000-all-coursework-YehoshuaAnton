"use strict";

// initialize total variable
let total = 0;

//get 3 scores and add them together
const score1 = 89;
total += score1;

const score2 = 90;
total += score2;

const score3 = 93;
total += score3;

//calculate the average
const average = parseFloat(total/3);

// display the scores
console.log(`Score 1: ${score1}`);
console.log(`Score 2: ${score2}`);
console.log(`Score 3: ${score3}`);
console.log(`Average score: ${average.toFixed(2)}`);