"use strict";

const getElement = selector => document.querySelector(selector); 

const processEntries = () => {
    // get form controls to check for validity
    const email = getElement("#email_address");
    const phone = getElement("#phone");
    const country = getElement("#country");
    const terms = getElement("#terms");

    // check user entries for validity
    let isValid = true;
    if (email.value == "") {
        email.nextElementSibling.textContent = "This field is required.";
        isValid = false; 
    } else {
        email.nextElementSibling.textContent = ""; 
    }

    if (phone.value == "") {
        phone.nextElementSibling.textContent = "This field is required.";
        isValid = false; 
    } else { 
        phone.nextElementSibling.textContent = "";
    }

    if (country.value == "") {
        country.nextElementSibling.textContent = "Please select a country.";
        isValid = false; 
    } else { 
        country.nextElementSibling.textContent = "";
    }

    if (!terms.checked) {
        terms.nextElementSibling.textContent = "This box must be checked.";
        isValid = false; 
    } else { 
        terms.nextElementSibling.textContent = "";
    }

    // submit the form if all fields are valid
    if (isValid) {
        getElement("form").submit(); 
    }
};

const resetForm = () => {
    getElement("form").reset();
    getElement("#email_address").nextElementSibling.textContent = "*";
    getElement("#phone").nextElementSibling.textContent = "*";
    getElement("#country").nextElementSibling.textContent = "*";
    getElement("#terms").nextElementSibling.textContent = "*";
    getElement("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    getElement("#register").addEventListener("click", processEntries);
    getElement("#reset_form").addEventListener("click", resetForm);  
    getElement("#email_address").focus();   
});