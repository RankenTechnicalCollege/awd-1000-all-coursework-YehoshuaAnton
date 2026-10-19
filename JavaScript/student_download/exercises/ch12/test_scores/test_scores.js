"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const scores = [];

    getElement("#add_score").addEventListener("click", () => {
        // clear any previous error message
        getElement("#add_score").nextElementSibling.textContent = "";  
        
        // get score entered by user and validate
        const score = parseFloat(getElement("#score").value);
        if (isNaN(score) || score < 0 || score > 100) {
            const msg = "Score must be from 0 to 100."; 
            getElement("#add_score").nextElementSibling.textContent = msg; 
        }
        else { // score is valid
            
            // add score to scores array 
            scores.push(score);

            // display all scores
            getElement("#all").textContent = scores.join(", ");

            // display letter grades for scores
            const grades = scores.map(elem => {
                if (elem >= 90) return "A";
                else if (elem >= 80) return "B";
                else if (elem >= 70) return "C";
                else if (elem >= 60) return "D";
                else return "F";
            });
            getElement("#grades").textContent = grades.join(", ");
            
            // calculate and display average score
            const sum = scores.reduce((total, elem) => total + elem, 0);
            const avg = sum/scores.length;
            getElement("#avg").textContent = avg.toFixed(2);

            // display the scores sorted in descending order
            const sortedScores = scores.slice();  // make a copy
            sortedScores.sort((a, b) => b - a);  
            getElement("#sort").textContent = sortedScores.join(", ");
        }
        
        // get text box ready for next entry
        getElement("#score").value = "";
        getElement("#score").focus(); 
    });

    // set focus on initial load
    getElement("#score").focus();
});