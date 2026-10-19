"use strict";

function getNumber(promptMsg, defaultValue) {
    let num = NaN;
    while (isNaN(num)) {
        num = parseFloat(prompt(promptMsg, defaultValue));
    }
    return num;
}

function calcFutureValue(investment, rate, years) {
    let futureValue = investment;
    for (let i = 0; i < years; i++) {
        futureValue += futureValue * rate / 100;
    }
    return futureValue;    
}

function displayResults(investment, rate, years, futureValue) {
    alert("Investment amount: $" + investment + "\n" +
          "Interest rate: " + rate + "%\n" +
          "Years: " + years + "\n" +
          "Future Value: $" + futureValue.toFixed(2));    
}

const investment = getNumber("Enter investment amount as xxxxx.xx", 10000);
const rate = getNumber("Enter interest rate as xx.x", 7.5);
const years = getNumber("Enter number of years", 10);
const futureValue = calcFutureValue(investment, rate, years);
displayResults(investment, rate, years, futureValue);