"use strict";

(() => {
  let input = document.getElementById("input");
  const submit = document.getElementById("submit"),
    display = document.getElementById("display");
  submit.addEventListener("click", () => {
    input = Number(input.value);
    try {
      if (isNaN(input)) {
        throw "Please enter a number, not a word.";
      } else if (input > 3) {
        throw "You didn't enter a valid number.";
      } else {
        switch (input) {
          case 1:
            throw "One is the loneliest number that you'll ever do.";
          case 2:
            throw "Two can be as bad as one. It's the loneliest number since the number one.";
          case 3:
            throw "There is no three.";
        }
      }
    } catch (error) {
      display.innerHTML = error;
    }
  });
})();