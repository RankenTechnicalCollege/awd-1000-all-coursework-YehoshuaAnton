"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Yehoshua Anton
      Date:   11/23/2026

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
// Create a constructor for the (nonexistent) timer class that takes minute and seconds as arguments and stores them in its own minutes and seconds variables, and creates a timeID variable for itself, setting the initial value to null
function timer(min, sec) {
      this.minutes = min;
      this.seconds = sec;
      this.timeID = null;
}

// Create a prototype function for the timer class called "runPause" that takes a timer, a minutes box, and a seconds box as arguments
timer.prototype.runPause = function (timer, minBox, secBox) {
      if (timer.timeID) { // If timer.timeID has a value (truthy)
            window.clearInterval(timer.timeID); // Pause the timer by clearing the interval
            timer.timeID = null; // Set timer.timeID to a falsy value(null)
      } else { // If timer.timeID is falsy (null, in this case)
            timer.timeID = window.setInterval(countdown, 1000); // set timer.timeID 
      }
}

function countdown() {
      if (timer.seconds > 0) { // If there are more than 0 seconds left on the timer (not including, as the decrement operator will cause a value of 0 to go negative)
            timer.seconds--; // Decrement the seconds counter by 1
      } else if (timer.minutes > 0) { // Else if there are no seconds remaining on the timer, but the minutes counter is more than 0 (not including, for the same reason)
            timer.minutes--; // Decrement the minutes counter by 1
            timer.seconds = 59; // Reset the seconds counter to 59
      } else { // If there are neither minutes nor seconds remaining on the timer
            window.clearInterval(timer.timeID); // Stop the timer by clearing the current interval
            timer.timeID = null; // Set timer.timeID to null
      }
      timer.minutes = minBox.value;
      timer.seconds = secBox.value;
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
// Should be const, but whatever
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

const myTimer = new timer(minBox.value, secBox.value); // Create a new instance of the timer class initializing it using the values in the minBox and secBox as parameters, and save it in a variable called "myTimer"

minBox.onchange = function () {
      minBox.value = myTimer.minutes;
}

secBox.onchange = function () {
      secBox.value = myTimer.seconds;
}

runPauseTimer.onclick = myTimer.runPause(myTimer, minBox, secBox);
console.log(myTimer.timeID);
console.log(myTimer.minutes, myTimer.seconds);