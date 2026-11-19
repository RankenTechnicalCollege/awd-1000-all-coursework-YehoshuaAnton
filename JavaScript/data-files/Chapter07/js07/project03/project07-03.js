"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Yehoshua Anton
      Date:   11/19/2026

      Filename: project07-03.js
*/

const currentTime = document.getElementById("currentTime"),
      daysLeftBox = document.getElementById("days"),
      hrsLeftBox = document.getElementById("hours"),
      minsLeftBox = document.getElementById("minutes"),
      secsLeftBox = document.getElementById("seconds");

setInterval(countdown, 1000);

function countdown() {
      const now = new Date(),
            newYear = new Date(2000, 0, 1),
            nextYear = now.getFullYear() + 1;
      newYear.setFullYear(nextYear);

      const daysLeft = (newYear - now) / (1000 * 60 * 60 * 24),
            hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24,
            minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60,
            secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

      currentTime.textContent = now.toLocaleString();
      daysLeftBox.textContent = Math.floor(daysLeft);
      hrsLeftBox.textContent = Math.floor(hrsLeft);
      minsLeftBox.textContent = Math.floor(minsLeft);
      secsLeftBox.textContent = Math.floor(secsLeft);
}