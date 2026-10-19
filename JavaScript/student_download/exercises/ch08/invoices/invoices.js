"use strict";

const getElement = selector => document.querySelector(selector); 

const displayInvoice = () => {
    const companyName = getElement("#company").value;
    const amountDue = parseFloat(getElement("#amount_due").value);
    const invoiceDate = getElement("#invoice_date").value;

    // display user entries
    let output = "Invoice Information\n";
    output += "Company name: " + companyName + "\n";
    output += "Amount due: $" + amountDue.toFixed(2) + "\n";
    output += "Invoice Date: " + invoiceDate + "\n";

    // calculate due date and display

    // calculate days until due and display

    alert(output);
}

document.addEventListener("DOMContentLoaded", () => {
    getElement("#display_invoice").addEventListener("click", displayInvoice);
    getElement("#company").focus();
});