/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Yehoshua Anton
      Date:   10/21/2026

      Filename: project02-03.js
 */

"use strict";

const feedback = document.getElementById("feedback"), square = document.getElementById("square"), triangle = document.getElementById("triangle"), circle = document.getElementById("circle");

square.onmouseover = () => {
      feedback.innerHTML = "You're hovering over the square";
}

square.onmouseout = () => {
      feedback.innerHTML = "";
}

triangle.onmouseover = () => {
      feedback.innerHTML = "You're hovering over the triangle";
}

triangle.onmouseout = () => {
      feedback.innerHTML = "";
}

circle.onmouseover = () => {
      feedback.innerHTML = "You're hovering over the circle";
}

circle.onmouseout = () => {
      feedback.innerHTML = "";
}