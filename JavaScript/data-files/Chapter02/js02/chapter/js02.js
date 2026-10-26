/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Yehoshua Anton
      Date:   10/21/2026

      Filename: js02.js
 */

"use strict";

(function () {
      const EMP_COST = 100,        // Cost of photographer per hour
            BOOK_COST = 350,       // Cost of memory book
            REPRO_COST = 1250,     // Cost of reproduction rights
            TRAVEL_COST = 2;       // Cost of travel per mile

      const photoNum = document.getElementById("photoNum"),
            photoHrs = document.getElementById("photoHrs"),
            makeBook = document.getElementById("photoHrs"),
            photoRights = document.getElementById("photoRights"),
            photoDist = document.getElementById("photoDist");

      function setupForm() {
            photoNum.value = 1;
            photoHrs.value = 2;
            makeBook.checked = false;
            photoRights.checked = false;
            photoDist.value = 0;

            getEstimate();

            // Add event handlers for each input control
            photoNum.onchange = getEstimate;
            photoHrs.onchange = getEstimate;
            photoDist.onchange = getEstimate;
            makeBook.onchange = getEstimate;
            photoRights.onchange = getEstimate;
      }


      // Estimate the total cost of the service
      function getEstimate() {
            let totalCost = 0;
            let photographers = photoNum.value;
            let hours = photoHrs.value;
            let distance = photoDist.value;
            let buyBook = makeBook.checked;
            let buyRights = photoRights.checked;

            // Add the cost of photographers for the hours covered
            totalCost += photographers * hours * EMP_COST;

            // Add the cost of distance per photographer per mile
            totalCost += photographers * distance * TRAVEL_COST;

            // Add the cost of the book if purchased
            totalCost += buyBook ? BOOK_COST : 0;

            // Add the cost of photo rights if purchased
            totalCost += buyRights ? REPRO_COST : 0;

            // Display the total cost estimate
            document.getElementById("estimate").innerHTML = "$" + totalCost;
      }

      // Set up  the form when the page loads
      window.addEventListener("load", setupForm);
})();