"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-03

      Project to build a Pizza using object oriented programming
      Author: Yehoshua Anton
      Date:   11/24/2026

      Filename: project08-03.js
*/

/*---------------- Object Code ----------------------*/

const cart = {
   items: new Array(),
   addItem: function (foodItem) {
      this.items.push(foodItem);
   }
}

function Pizza() {
   this.size;
   this.crust;
   this.toppings = new Array();

   Pizza.prototype.addToCart = function (cart) {
      cart.items.push(this);
   }

   Pizza.prototype.summarize = function () {
      let summary = `Pizza: ${this.size} ${this.crust}`;
      for (let i = 0; i < this.toppings.length; i++) {
         // The book doesn't mention this part, but need to make sure the toppings' side isn't none, or it'll add the entire array every time
         if (this.toppings[i].side !== "none") {
            summary += ` ${this.toppings[i].name} (${this.toppings[i].side})`;
         }
      }
      return summary;
   }
}

function Topping() {
   this.name;
   this.side;
}

/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox");         // Pizza image 
let pizzaSizeBox = document.getElementById("pizzaSize");             // Pizza size selection
let pizzaCrustBox = document.getElementById("pizzaCrust");           // Pizza crust selection 
let toppingOptions = document.querySelectorAll("input.topping");     // Pizza Topping option buttons
let addToCart = document.getElementById("addToCart");                // Add to Cart button
let cartBox = document.getElementById("cart");                       // Shopping cart box


// Add event handlers for the Pizza toppings   
for (let i = 0; i < toppingOptions.length; i++) {
   toppingOptions[i].onclick = drawPizza;
}

// Event Handler for the addToCart button
addToCart.onclick = updateCart;


// Clear the Pizza image
function clearPizzaImage() {
   while (pizzaPreviewBox.firstChild) {
      pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
   }
}

// Unselect all toppings
function clearToppings() {
   let noTopping = document.querySelectorAll("input.topping[value='none']");
   for (let i = 0; i < noTopping.length; i++) {
      noTopping[i].checked = true;
   }
}

/* Function to draw the Pizza image  */
function drawPizza() {
   // Erase current Pizza image
   clearPizzaImage();
   // Determine which toppings have been checked
   let checkedToppings = document.querySelectorAll("input.topping:checked");

   // Draw the individual toppings
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         let toppingImage = document.createElement("img");
         toppingImage.src = checkedToppings[i].name + ".png";
         toppingImage.className = checkedToppings[i].value;
         pizzaPreviewBox.appendChild(toppingImage);
      }
   }
}



// Function to build the Pizza
function buildPizza() {
   let checkedToppings = document.querySelectorAll("input.topping:checked");
   let myPizza = new Pizza();
   myPizza.size = pizzaSizeBox.value;
   myPizza.crust = pizzaCrustBox.value;
   for (let i = 0; i < checkedToppings.length; i++) {
      let myTopping = new Topping();
      myTopping.name = checkedToppings[i].name;
      myTopping.side = checkedToppings[i].value;
      // According to the book, this should be addTopping(myTopping)
      myPizza.toppings.push(myTopping);
   }
   return myPizza;
}

// Function to add the built Pizza to the shopping cart
function updateCart() {
   let myPizza = buildPizza();
   cart.addItem(myPizza);
   const paragraph = document.createElement("p");
   // Book says value when it means textContent
   paragraph.textContent = myPizza.summarize(myPizza);
   cartBox.appendChild(paragraph);
   clearPizzaImage();
   clearToppings();
}