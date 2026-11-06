"use strict";

(() => {
  for (let i = 1; i < 100; i += 2) {
    document.getElementById("display").innerHTML += `${i}<br>`;
  }
})();