"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Yehoshua Anton
      Date:   11/17/2026

      Filename: project06-03.js
*/

(() => {
      const useShip = document.getElementById("useShip");
      useShip.addEventListener("click", copyShippingToBilling);

      function copyShippingToBilling() {
            if (useShip.checked) {
                  firstnameBill.value = firstnameShip.value;
                  lastnameBill.value = lastnameShip.value;
                  address1Bill.value = address1Ship.value;
                  address2Bill.value = address2Ship.value;
                  cityBill.value = cityShip.value;
                  countryBill.value = countryShip.value;
                  codeBill.value = codeShip.value;
                  stateBill.selectedIndex.value = stateShip.selectedIndex.value;
            }
      }

      const formElements = document.querySelectorAll("input[type=\"text\"]"),
            errorBox = document.getElementById("errorBox");
      const fieldCount = formElements.length;

      formElements.forEach((elements) => {
            elements.addEventListener("invalid", showValidationError);
      });

      function showValidationError(evt) {
            evt.preventDefault();
            errorBox.textContent = "Complete all highlighted fields";
      }
})();