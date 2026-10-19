"use strict";

// get investment amount - loop until user enters a number
let investment = NaN;
while (isNaN(investment)) {
    investment = parseFloat(
        prompt("Enter investment amount", 10000));
}

// get interest rate - loop until user enters a number
let rate = NaN;
while (isNaN(rate)) {
    rate = parseFloat(prompt("Enter interest rate", 4.5));
}

// get number of years - loop until user enters a number
let years = NaN;
while (isNaN(years)) {
    years = parseInt(prompt("Enter years", 10));
}

// calulate future value
let futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue += futureValue * rate / 100;
}

// display results
alert("Investment amount: $" + investment + "\n" +
      "Interest rate: " + rate + "%\n" +
      "Years: " + years + "\n" +
      "Future Value: $" + futureValue.toFixed(2));