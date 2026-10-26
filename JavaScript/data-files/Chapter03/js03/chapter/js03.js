/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Yehoshua Anton
     Date:   10/26/2026

     Filename: js03.js
 */

"use strict";

(function () {
    // Days of the week
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Function to write weekday names into the calendar
    function addWeekdays() {
        let i = 0; // Initial counter value

        // reference the collection of heading cells
        const headingCells = document.getElementsByTagName("th");

        // Write each of the seven days into a heading cell
        while (i < weekdays.length) {
            headingCells[i].innerHTML = weekdays[i];
            i++; // Increment the counter by 1
        }
    }

    // Function to write game information into the calendar
    function showGames() {
        for (let i = 0; i < gameDates.length; i++) {
            let gameInfo = "";

            // Open the paragraph
            switch (gameResults[i]) {
                case "W":
                    gameInfo += "<p class=\"win\">";
                    break;
                case "L":
                    gameInfo += "<p class=\"lose\">";
                    break;
                case "S":
                    gameInfo += "<p class=\"suspended\">";
                    break;
                case "P":
                    gameInfo += "<p class=\"postponed\">";
                    break;
            }

            // Display the game location
            if (gameLocations[i] === "h") {
                gameInfo += "vs. ";
            } else if (gameLocations[i] === "a") {
                gameInfo += "@ ";
            }

            // Include the opponent
            gameInfo += gameOpponents[i] + "<br>";

            // Include the result and score
            gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

            // Display innings played for suspended, shortened, or extra-inning games
            if (gameInnings[i] < 5) {
                gameInfo += " [" + gameInnings[i] + "]***";
            } else if (gameInnings[i] < 9) {
                gameInfo += " [" + gameInnings[i] + "]*";
            } else if (gameInnings[i] > 9) {
                gameInfo += " [" + gameInnings[i] + "]";
            }

            // Close the paragraph
            gameInfo += "</p>";

            // Write the information into a table cell
            let tableCell = document.getElementById(gameDates[i]);
            tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
        }
    }

    window.addEventListener("load", addWeekdays);
    window.addEventListener("load", showGames);
})();
