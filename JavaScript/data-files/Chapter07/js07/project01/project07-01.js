"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Yehoshua Anton
      Date:   11/18/2026

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const pwd = document.getElementById("pwd").value;
      const feedback = document.getElementById("feedback");
      const regex1 = /[A-Z]/g,
            regex2 = /\d/g,
            regex3 = /[!\$#%]/g;
      if (pwd.length < 8) {
            feedback.textContent = "Your password must be at least 8 characters";
      } else if (!regex1.test(pwd)) {
            feedback.textContent = "Your password must include an uppercase letter";
      } else if (!regex2.test(pwd)) {
            feedback.textContent = "Your password must include a number";
      } else if (!regex3.test(pwd)) {
            feedback.textContent = "Your password must include one of the following: !$#%";
      } else {
            feedback.textContent = "";
      }
});