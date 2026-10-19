"use strict";

// get user's question
const question = prompt("Please enter a yes or no question.")

if (question) {
    let answer = "";

    // get a random number between 1 and 9
    const num = Math.ceil(Math.random() * 9);        

    switch (num) {
        case 1:
            answer = "It is certain.";
            break;
        case 2:
            answer = "Reply hazy, try again.";
            break;
        case 3:
            answer = "Don't count on it.";
            break;
        case 4:
            answer = "It is decidedly so.";
            break;
        case 5:
            answer = "Without a doubt.";
            break;
        case 6:                  
            answer = "Ask again later.";
            break;
        case 7:
            answer = "My sources say no.";
            break;
        case 8:
            answer = "Most likely.";
            break;
        case 9:
            answer = "Signs point to yes.";
            break;
        default:
            answer = "Something went wrong.";
            break;
    }
    alert(question + "\n" + 
          answer);
} else {
    alert("You didn't enter a question.");
}