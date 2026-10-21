/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Yehoshua Anton
      Date:   10/21/2026

      Filename: project02-01.js
 */

"use strict";

const celsius = document.getElementById("cValue"),
      fahrenheit = document.getElementById("fValue");

function FahrenheitToCelsius(degree) {
      return (degree - 32) / 1.8;
}

function CelsiusToFahrenheit(degree) {
      return degree * 1.8 + 32;
}

celsius.onchange = function () {
      let cDegree = celsius.value;
      fahrenheit.value = CelsiusToFahrenheit(cDegree);
}

fahrenheit.onchange = function () {
      let fDegree = fahrenheit.value;
      celsius.value = FahrenheitToCelsius(fDegree);
}