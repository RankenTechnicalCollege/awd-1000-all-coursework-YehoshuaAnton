"use strict";

function getElement(selector) {
    return document.querySelector(selector);
} 

function isNotValid(val) {
    /*
    if (isNaN(val)) {
        console.error("Value is not a number");
    } else if (val <= 0) {
        console.warn(`Value ${val} is not greater than zero.`);
    }
    */
    return isNaN(val) || val <= 0;
}

function calcFutureValue(investment, rate, years) {
    // console.log("calcFutureValue() has started");
    // console.trace();
    let futureValue = investment;
    for (let i = 1; i <= years; i++) {
        futureValue += futureValue * rate / 100;
        // console.log(`year ${i} future value is ${futureValue}`);        
    }
    return futureValue;
}

function calcButtonClick() {
    // clear any previous calculation
    getElement("#future_value").value = "";

    // get values user entered in text boxes
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

    // if user entries are valid, calculate and display future value
    if (errorMsg == "") {
        const futureValue = calcFutureValue(investment, rate, years);
        getElement("#future_value").value = futureValue.toFixed(2);
    } else {
        alert(errorMsg);
    }
}

document.addEventListener("DOMContentLoaded", () => {   
    // attach the button click event handler
    getElement("#calculate").addEventListener("click", calcButtonClick);
    
    // set focus on first text box on initial load
    getElement("#investment").focus();
});