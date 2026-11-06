"use strict";

(() => {
  for (let i = 15; i < 100; i += 15) {
    document.getElementById("display").innerHTML += `${i}<br>`;
  }
})();