"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Yehoshua Anton
      Date:   11/19/2026

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan", "Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
   "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
   "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
   "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
   "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
   "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
   "Wesley Cho"];

const customerName = document.getElementById("customerName");
const customerList = document.getElementById("customerList");

const addButton = document.getElementById("addButton");
const searchButton = document.getElementById("searchButton");
const removeButton = document.getElementById("removeButton");
const topButton = document.getElementById("topButton");

const status = document.getElementById("status");

generateCustomerList();

addButton.onclick = () => {
   customers.push(customerName.value);
   generateCustomerList();
   status.textContent = `${customerName.value} added to the end of the queue`;
}

searchButton.onclick = () => {
   const place = customers.indexOf(customerName.value) + 1;
   status.textContent = (place === 0) ? `${customerName.value} is not found in the queue` : `${customerName.value} is found in position ${place} of queue`;
}

removeButton.onclick = () => {
   const index = customers.indexOf(customerName.value);
   if (index !== -1) {
      customers.splice(index);
      status.textContent = `${customerName.value} removed from the queue`;
      generateCustomerList();
   } else {
      status.textContent = `${customerName.value} is not found in the queue`;
   }
}

topButton.onclick = () => {
   const topCustomer = customers.shift();
   status.textContent = `${topCustomer} removed from the queue`;
   generateCustomerList();
}

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");
      customerItem.textContent = customers[i];
      customerList.appendChild(customerItem);
   }
}

