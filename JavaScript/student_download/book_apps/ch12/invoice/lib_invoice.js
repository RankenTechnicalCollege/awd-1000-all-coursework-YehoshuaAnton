"use strict";

class Invoice {
    constructor(subtotal, taxRate) {
        this.subtotal = subtotal;
        this.taxRate = taxRate;
    }
    getSalesTax() {
        return this.subtotal * this.taxRate;
    }
    getTotal() {
        return this.subtotal + this.getSalesTax();
    }
}