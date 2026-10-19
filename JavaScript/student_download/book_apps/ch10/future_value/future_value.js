"use strict";

function getElement(selector) {
    return document.querySelector(selector);
}

function isNotValid(val) {
    if (isNaN(val) || val <= 0) {
        return true;
    } else {
        return false;
    }
}

function calcFutureValue(investment, rate, years) {
    let futureValue = investment;
    for (let i = 0; i < years; i++) {
        futureValue += futureValue * rate / 100;
    }
    return futureValue;
}

function calcButtonClick() {
    // clear any previous calculation
    getElement("#future_value").value = "";

    // get values user entered in textboxes
    const investment = parseFloat(getElement("#investment").value);
    const rate = parseFloat(getElement("#rate").value);
    const years = parseInt(getElement("#years").value);
    
    // check user entries and set error message
    let errorMsg = "";
    if (isNotValid(investment)) { 
        errorMsg += "Investment amount must be a positive number.\n";
        getElement("#investment").focus();
    } 
    if (isNotValid(rate)) { 
        errorMsg += "Interest rate must be a positive number.\n";
        getElement("#rate").focus();
    }     
    if (isNotValid(years)) {
        errorMsg += "Number of years must be a positive number.";
        getElement("#years").focus();
    } 

    // if user entries are valid
    if (errorMsg == "") {
        // save user entries
        localStorage.investment = investment;
        localStorage.rate = rate;
        localStorage.years = years;

        // calculate and display future value
        const futureValue = calcFutureValue(investment, rate, years);
        getElement("#future_value").value = futureValue.toFixed(2);
    } else {
        // display error message
        alert(errorMsg);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // load user entries
    getElement("#investment").value = localStorage.investment ?? "";
    getElement("#rate").value = localStorage.rate ?? "";
    getElement("#years").value = localStorage.years ?? "";

    // attach the event handler
    getElement("#calculate").addEventListener("click", calcButtonClick);
    
    // set focus on first text box on initial load
    getElement("#investment").focus();
});