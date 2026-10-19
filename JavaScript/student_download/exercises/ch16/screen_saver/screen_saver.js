"use strict";

const padStart = value => value.toString().padStart(2,"0");

const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const ampm = (hours < 12) ? "AM" : "PM";
    if (hours > 12) hours = hours - 12;
    return `${padStart(hours)}:${padStart(now.getMinutes())} ${ampm}`;
};

document.addEventListener("DOMContentLoaded", () => {
    // get canvas and context
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    // configure text
    ctx.font = "40px serif";
    ctx.strokeStyle = "purple";
    const textWidth = 160;
    const textHeight = 25;

    // set variables for tracking movement of text on screen
    let x = 0;
    let xIncrement = 2;

    let y = textHeight;  // offset text height since x and y are at lower left corner of text
    let yIncrement = 2;

    const move = () => {
        // clear previous and draw new 
        

        // reverse x direction if at either side of canvas
        

        // reverse y direction if at top or bottom of canvas
        

        // calculate new x and y values for next frame
        

        // continue animation
        
    };

    // start animation;
    requestAnimationFrame(move);
});