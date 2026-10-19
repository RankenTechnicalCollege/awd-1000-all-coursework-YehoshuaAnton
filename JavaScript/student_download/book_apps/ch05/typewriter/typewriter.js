"use strict";

document.addEventListener("DOMContentLoaded", () => {
    
    document.addEventListener("keydown", event => {
        const pre = document.querySelector("#text");

        const validChars = `abcdefghijklmnopqrstuvwxyz
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            1234567890~!@#$%^&*()_+-=\;:'",.`;

        if (validChars.includes(event.key)) {
            pre.textContent += event.key;    
        }
        else if (event.key.toLowerCase() === "enter") {
            pre.textContent += "\n";
        } 
        else if (event.key.toLowerCase() === "backspace") {
            // remove last character 
            pre.textContent = pre.textContent.slice(0, -1);  
        }
    });
});