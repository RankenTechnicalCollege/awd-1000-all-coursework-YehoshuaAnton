"use strict";

const getElement = selector => document.querySelector(selector);

const padValue = value => value.toString().padStart(2, "0");

const displayClock = () => {
    const now = new Date();
    const ampm = (now.getHours() >= 12) ? "PM" : "AM";
    const hours = (now.getHours() > 12) ? now.getHours() - 12 : now.getHours();
    const minutes = padValue(now.getMinutes());
    const seconds = padValue(now.getSeconds());

    getElement("#time").textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    getElement("#date").textContent = now.toDateString();
};

document.addEventListener("DOMContentLoaded", () => {
    // set initial clock time and then start interval for clock
    displayClock();
    setInterval(displayClock, 1000);    
});