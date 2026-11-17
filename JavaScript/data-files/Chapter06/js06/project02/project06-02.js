"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Yehoshua Anton
      Date:   11/17/2026

      Filename: project06-02.js
*/

(() => {
      window.addEventListener("load", function () {
            const allSelect = document.querySelectorAll("form#govLinks select");

            allSelect.forEach(function (select) {
                  select.addEventListener("change", function (evt) {
                        let linkURL = evt.target.value;
                        let newWin = window.open(linkURL);
                  });
            });
      });
})();
