"use strict";

(() => {
  let age = document.getElementById("age");
  const submit = document.getElementById("submit"),
    display = document.getElementById("display");
  submit.addEventListener("click", () => {
    age = Number(age.value);
    try {
      if (isNaN(age)) {
        throw "Please enter your age!";
      } else if (age < 1 || age > 200) {
        throw "Age out of range!";
      } else if (age < 21) {
        throw "You're not old enough!";
      }
      display.innerHTML = "Welcome to the venue!";
    } catch (error) {
      display.innerHTML = error;
    }
  });
})();