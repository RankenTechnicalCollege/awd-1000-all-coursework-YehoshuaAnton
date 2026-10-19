"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    getElement("#calculate").addEventListener("click", () => {
        const taxRate = 0.0875;
        const subtotal = parseFloat(getElement("#subtotal").value);

        const invoice = new Invoice(subtotal, taxRate);

        getElement("#tax_amount").value = invoice.getSalesTax();
        getElement("#total").value = invoice.getTotal();
    });    
});