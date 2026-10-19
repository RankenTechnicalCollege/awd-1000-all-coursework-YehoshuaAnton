"use strict";

function getLineItems() {
    const lineItems = [];
    lineItems.push(["HTML", 54.5, 5]);
    lineItems.push(["Python Data Analysis", 59.50, 2]);
    lineItems.push(["1984", 15.0, 1]);
    lineItems.push(["Dune", 20.0, 3]);
    return lineItems;
}

function makeCol(text) {
    const col = document.createElement("td");
    const textNode = document.createTextNode(text);
    col.appendChild(textNode);
    return col;
}

function addRow(lineItem) {
    const descr = lineItem[0];
    const price = lineItem[1];
    const quantity = lineItem[2];

    const table = document.querySelector("table");
    const row = document.createElement("tr");

    row.appendChild(makeCol(descr));
    row.appendChild(makeCol("$" + price));
    row.appendChild(makeCol(quantity));
    row.appendChild(makeCol("Line total goes here"));

    table.appendChild(row);
}

function addSummaryRow(lineItems) {
    // calculate total quantity and amount here

    const table = document.querySelector("table");
    const row = document.createElement("tr");

    row.appendChild(makeCol("TOTAL"));
    row.appendChild(makeCol(""));
    row.appendChild(makeCol("totalQty"));
    row.appendChild(makeCol("totalAmount"));

    table.appendChild(row);
}

document.addEventListener("DOMContentLoaded", () => {
    // get line items
    const lineItems = getLineItems();

    // display line items
    for (let lineItem of lineItems) {
        addRow(lineItem);
    }

    // add summary row
    addSummaryRow(lineItems);
});