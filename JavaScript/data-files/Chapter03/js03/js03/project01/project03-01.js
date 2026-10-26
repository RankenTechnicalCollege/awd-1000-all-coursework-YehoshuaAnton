/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Yehoshua Anton
      Date:   10/26/2026

      Filename: project03-01.js
*/

"use strict";

(function () {
      const menuItems = document.getElementsByClassName("menuItem"),
            billTotal = document.getElementById("billTotal"),
            length = menuItems.length;

      for (let i = 0; i < length; i++) {
            menuItems[i].addEventListener("click", calcTotal);
      }

      function calcTotal() {
            let orderTotal = 0;

            for (let i = 0; i < length; i++) {
                  orderTotal += menuItems[i].checked ? Number(menuItems[i].value) : 0;
            }

            billTotal.innerHTML = formatCurrency(orderTotal);
      }

      // Function to display a numeric value as a text string in the format $##.## 
      function formatCurrency(value) {
            return "$" + value.toFixed(2);
      }
})();