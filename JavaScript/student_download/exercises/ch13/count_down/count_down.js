"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    getElement("#countdown").addEventListener("click", () => {
        const event = new Event(getElement("#event").value, getElement("#date").value)
        const messageLbl = getElement("#message");  

        // make sure user entered event name and date 
        if (!event.hasName || !event.hasDate) {
            messageLbl.textContent = "Please enter both a name and a date.";
            return;
        }

        // make sure date is valid
        if (!event.isValidDate) {
            messageLbl.textContent = "Please enter a valid date.";
            return;
        }

        // display message
        messageLbl.textContent = event.message;
    });

    // set focus on first text box
    getElement("#event").focus();
});