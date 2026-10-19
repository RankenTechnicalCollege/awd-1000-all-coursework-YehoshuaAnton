"use strict";

const url = "http://127.0.0.1:3000/emails/";

function getElement(selector) {
    return document.querySelector(selector);
}

function displayEmails(emails) {
    const select = getElement("#emails");
    select.textContent = "";  // clear previous <option> elements

    // create and add <option> element for each email 
    for (let email of emails) {
        const option = document.createElement("option");
        option.value = email.id;
        const text = email.name + " - " + email.email;
        option.appendChild(document.createTextNode(text));
        select.appendChild(option);
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
        if (json.error) {
            alert("Server error - " + json.error.message);
        } else {
            displayEmails(json);        
        }
    } catch(e) {
        alert(e.message);  
    }          

    getElement("#add_email").addEventListener("click", async() => {
        // get user entries
        const name = getElement("#name").value;
        const email = getElement("#email").value;
        try {
            // make API POST request
            const options = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name, email})
            }
            let response = await fetch(url, options);
            const json = await response.json();

            if (json.error) {
                alert("Server error - " + json.error.message);
            } else {
                // make API GET request to retrieve updated data
                response = await fetch(url);
                displayEmails(await response.json());
            }
        } catch(e) {
            alert(e.message);
        } 
    });

    getElement("#delete_email").addEventListener("click", async() => {
        const id = getElement("#emails").value;
        if (id == "") {
            alert ("Please select an email to delete.");
            return;
        } 

        try {
            // make API DELETE request
            let response = await fetch(url + id, {method: "DELETE"});
            const json = await response.json();

            if (json.error) {
                alert("Server error - " + json.error.message);
            } else {
                // make API GET request to retrieve updated data
                response = await fetch(url);
                displayEmails(await response.json());
            }
        } catch(e) {
            alert(e.message);
        }
    });
});