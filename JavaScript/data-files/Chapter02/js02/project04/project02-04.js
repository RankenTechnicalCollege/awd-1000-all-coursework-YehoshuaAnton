/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Yehoshua Anton
      Date:   10/22/2026

      Filename: project02-04.js
 */

"use strict";

(function () {
   const CHICKEN_PRICE = 10.95,
      HALIBUT_PRICE = 13.95,
      BURGER_PRICE = 9.95,
      SALMON_PRICE = 18.95,
      SALAD_PRICE = 7.95,
      SALES_TAX = 0.07;

   const buyChicken = document.getElementById("chicken"),
      buyHalibut = document.getElementById("halibut"),
      buyBurger = document.getElementById("burger"),
      buySalmon = document.getElementById("salmon"),
      buySalad = document.getElementById("salad");

   window.addEventListener("load", calcTotal);
   buyChicken.addEventListener("click", calcTotal);
   buyHalibut.addEventListener("click", calcTotal);
   buyBurger.addEventListener("click", calcTotal);
   buySalmon.addEventListener("click", calcTotal);
   buySalad.addEventListener("click", calcTotal);

   function calcTotal() {
      let cost = 0, tax, totalCost;

      cost += (buyChicken.checked === true) ? CHICKEN_PRICE : 0;
      cost += (buyHalibut.checked === true) ? HALIBUT_PRICE : 0;
      cost += (buyBurger.checked === true) ? BURGER_PRICE : 0;
      cost += (buySalmon.checked === true) ? SALMON_PRICE : 0;
      cost += (buySalad.checked === true) ? SALAD_PRICE : 0;

      tax = cost * SALES_TAX;
      totalCost = cost + tax;

      document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
      document.getElementById("foodTax").innerHTML = formatCurrency(tax);
      document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
   }

   // Function to display a numeric value as a text string in the format $##.## 
   function formatCurrency(value) {
      return "$" + value.toFixed(2);
   }
})()