"use strict";

// get miles from user
const miles = parseFloat(prompt("Miles:", 120));

// calculate kilometers
const kilometers = miles * 1.60934;

// display results
const results = "Miles: " + miles + "\n" +
                "Kilometers: " + kilometers.toFixed(2);

alert(results);