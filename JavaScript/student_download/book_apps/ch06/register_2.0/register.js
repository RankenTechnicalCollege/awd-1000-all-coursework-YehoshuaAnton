"use strict";

const getElement = selector => document.querySelector(selector); 

const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = getElement("ul");
    if (node == null) {
        // get the form element 
        const form = getElement("form");

        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }  
}

const processEntries = () => {
    // get form controls to check for validity
    const email = getElement("#email_address");
    const phone = getElement("#phone");
    const country = getElement("#country");
    const terms = getElement("#terms");

    // create array for error messages
    const msgs = [];

    // check user entries for validity
    if (email.value === "") {
        msgs.push("Please enter an email address.");
    } 
    if (phone.value === "") {
        msgs.push("Please enter a mobile phone number."); 
    } 
    if (country.value === "") {
        msgs.push("Please select a country.");
    } 
    if (!terms.checked) {
        msgs.push("You must agree to the terms of service."); 
    }

    // submit the form or notify user of errors
    if (msgs.length === 0) {  // no error messages
        getElement("form").submit();  
    } else {
        displayErrorMsgs(msgs);
    }
};

const resetForm = () => {
    getElement("form").reset();
    
    // remove error messages if any
    const ul = getElement("ul");
    if (ul !== null) ul.remove();
    
    getElement("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    getElement("#register").addEventListener("click", processEntries);
    getElement("#reset_form").addEventListener("click", resetForm);  

    getElement("#email_address").focus();   
});