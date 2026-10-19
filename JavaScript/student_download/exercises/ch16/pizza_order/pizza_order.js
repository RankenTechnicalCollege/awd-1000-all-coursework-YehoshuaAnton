"use strict";

const getElement = selector => document.querySelector(selector);

const drawLogo = () => {
    const canvas = getElement("canvas");
    const ctx = canvas.getContext("2d");

    // set size of squares and calculate number of squares
    const len = 40;
    const squaresPerRow = canvas.width / len;
    const squaresPerColumn = canvas.height / len;
     
    // set hex value for  squares
    const red = "#ff0000";   // hex value for red
    const white = "#ffffff"; // hex value for white

    // set fill color for first square to red
    ctx.fillStyle = red;

    // draw squares
    for (let x = 0; x < squaresPerRow; x++) {
        for (let y = 0; y < squaresPerColumn; y ++) {   
            // draw square
            ctx.fillRect(len * x, len * y, len, len);
            // set color for next square
            ctx.fillStyle = (ctx.fillStyle == white) ? red : white;
        }
    }
    
    // add red outer border
    ctx.strokeStyle = "red";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // add restaurant name - chartreuse with black border
    ctx.font = "bold 60px sans-serif";
    ctx.fillStyle = "chartreuse";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    const x = 85;
    const y = 80;
    ctx.fillText("Pizza Bella", x, y);
    ctx.strokeText("Pizza Bella", x, y);
};

// drag/drop methods
const dragStart = evt => {

};

const dragOver = evt => {

};

const drop = evt => {

};

document.addEventListener("DOMContentLoaded", () => {
    drawLogo();

    // get <div> elements 
    const toppings = getElement("#toppings");
    const order = getElement("#order");

    // add dragstart event handler for each li 
    // element in toppings div
    const items = toppings.querySelectorAll("li");
    for (let li of items) {
        
    }

    // make order <div> a drop target
    

    // make toppings <div> a drop target so can drag items back
    

    // save button click event handler
    getElement("#submit_order").addEventListener("click", () => {
        let msg = "Your pizza with ";

        const selectedItems = order.querySelectorAll("li");
        if (selectedItems.length == 0) {
            msg += "cheese only"
        } else {
            for (let li of selectedItems) {
                msg += li.textContent + ", ";
            }
            msg = msg.slice(0, - 2);  // remove last comma and space
        }
        alert(msg + " is on its way!");
    });
});

