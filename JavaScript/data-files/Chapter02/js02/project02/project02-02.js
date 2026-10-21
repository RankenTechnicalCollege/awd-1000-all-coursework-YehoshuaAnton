/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Yehoshua Anton
      Date:   10/21/2026

      Filename: project02-02.js
 */

"use strict";

const name = document.getElementById("name").value, email = document.getElementById("email").value, phone = document.getElementById("phone").value;

function verifyForm() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;

      if (name !== "" && email !== "" && phone !== "") {
            window.alert("Thank you!");
      } else {
            window.alert("Please fill in all fields");
      }
}

document.getElementById("submit").addEventListener("click", verifyForm);