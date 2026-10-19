"use strict";

const url = "http://127.0.0.1:3000/emails/";

function getElement(selector) {
    return document.querySelector(selector);
}

function displayEmails(emails) {
    const selectElement = getElement("#emails");
    selectElement.textContent = "";  // clear previous <option> elements

    // create and add <option> element for each email 
    for (let email of emails) {
        const option = document.createElement("option");
        option.value = email.id;
        const text = email.name + " - " + email.email;
        option.appendChild(document.createTextNode(text));
        selectElement.appendChild(option);
    }

    // clear form and set focus on first text box
    getElement("#name").value = "";
    getElement("#email").value = "";
    getElement("#name").focus();
}

document.addEventListener("DOMContentLoaded", async() => {
    // make API GET request
    try {
        const response = await fetch(url);
        const json = await response.json();
        if (json.error)
            alert("Server error - " + json.error.message);
        else
            displayEmails(json);        
    } catch(e) {
        alert(e.message);  
    }          

    getElement("#add_email").addEventListener("click", async() => {
        // get user entries
        const name = getElement("#name").value;
        const email = getElement("#email").value;

        // make API POST request to add email to list
        alert("Error: Add email not working yet.");

        // make API GET request to display updated data
    });

    getElement("#delete_email").addEventListener("click", async() => {
        // get selected email
        const id = getElement("#emails").value;

        if (id == "") {
            alert ("Please select an email to delete.");
            return;
        } 

        // make API DELETE request to delete email from list
        alert("Error: Delete email not working yet.");

        // make API GET request to display updated data
    });
});