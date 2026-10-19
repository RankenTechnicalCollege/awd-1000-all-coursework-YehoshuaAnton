"use strict";

let timer = null;
let endTime = null;

const getElement = selector => document.querySelector(selector);

const padValue = value => value.toString().padStart(2, "0");

const displayTimer = () => {
    const now = new Date();
    const diff = endTime.getTime() - now.getTime();
    if (diff <= 0) {
        clearInterval(timer);
        getElement("#display_timer").textContent = "";
        alert("Time's up!!");
    } else {
        const timerDate = new Date(diff);
        const minutes = padValue(timerDate.getMinutes());
        const seconds = padValue(timerDate.getSeconds());
        getElement("#display_timer").textContent = `${minutes}:${seconds}`;
    }
}

const startTimer = () => {
    let minutes = NaN;
    while (!(minutes > 0 && minutes < 10)) {
        minutes = parseInt(prompt("Please enter 1 to 10 minutes."));
    }
    endTime = new Date();
    endTime.setMinutes(endTime.getMinutes() + minutes);

    // display timer and then start interval for timer
    displayTimer();
    timer = setInterval(displayTimer, 1000);   
}

document.addEventListener("DOMContentLoaded", () => {
    // attach event handler for timer button
    getElement("#start_timer").addEventListener("click", startTimer);
});