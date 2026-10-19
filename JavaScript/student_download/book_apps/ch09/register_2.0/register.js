"use strict";

const getElement = selector => document.querySelector(selector); 

const clearMessages = form => {
    for (let element of form.elements) {
        const span = element.nextElementSibling;
        if (span) span.textContent = "*";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    // turn off default HTML validation messages
    form.noValidate = true;

    // attach invalid event handler for form controls
    for (let element of form.elements) {
        element.addEventListener("invalid", evt => {
            const elem = evt.currentTarget;
            const msg = elem.title ? elem.title : elem.validationMessage;

            const span = elem.nextElementSibling;
            if (span) span.textContent = msg;
        });
    }

    form.addEventListener("submit", evt => {
        clearMessages(form);
        
        // do custom age validation
        const dobElement = getElement("#dob");
        const dob = new Date(dobElement.value);

        const limit = new Date();
        limit.setFullYear(limit.getFullYear() - 13);
        
        const msg = (dob > limit) ? dobElement.title: "";
        dobElement.setCustomValidity(msg);

        // validate form 
        if (!form.checkValidity()) {
            evt.preventDefault();
        }
    });

    getElement("#reset_form").addEventListener("click", () => {
        clearMessages(form);
        getElement("#email_address").focus();
    });  
});