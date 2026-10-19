"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    getElement("#countdown").addEventListener("click", () => {
        const eventName = getElement("#event").value;
        const eventDateString = getElement("#date").value;  
        const messageLbl = getElement("#message");  

        // make sure user entered event name and date 
        if (eventName.length == 0 || eventDateString.length == 0) {
            messageLbl.textContent = "Please enter both a name and a date.";
            return;
        }

        // make sure date is valid
        const eventDate = new Date(eventDateString);
        if (eventDate == "Invalid Date") {
            messageLbl.textContent = "Please enter a valid date.";
            return;
        }

        // calculate days
        const today = new Date();
        const msFromToday = eventDate.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        const daysToDate = Math.ceil( msFromToday / msForOneDay ); 

        // create and display message 
        let msg = "";
        const date = eventDate.toDateString();
        if (daysToDate == 0) {
            msg = `Hooray! Today is ${eventName}! (${date})`;
        } else if (daysToDate > 0) {
            msg = `${daysToDate} day(s) until ${eventName}! (${date})`;
        } else if (daysToDate < 0) {
            msg = `${eventName} happened ${Math.abs(daysToDate)} 
                   day(s) ago. (${date})`;
        }
        messageLbl.textContent = msg;
    });

    // set focus on first text box
    getElement("#event").focus();
});