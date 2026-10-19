"use strict";

const getElement = selector => document.querySelector(selector);

const padNum = (value, digits = 2) => value.toString().padStart(digits, "0");

const updateDisplay = () => {
    const now = new Date();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = padNum(now.getMilliseconds(), 3);

    getElement("#time").textContent = `${minutes}:${seconds}:${milliseconds}`;
};

const startClick = () => {
    updateDisplay();
}

const stopClick = () => {    
}

const resetClick = () => {

}

document.addEventListener("DOMContentLoaded", () => {
    getElement("#start").addEventListener("click", startClick);
    getElement("#stop").addEventListener("click", stopClick);
    getElement("#reset").addEventListener("click", resetClick);
});