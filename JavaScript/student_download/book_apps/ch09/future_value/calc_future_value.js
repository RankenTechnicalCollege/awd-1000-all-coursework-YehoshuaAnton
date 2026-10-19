// function that simulates an external service that is sometimes down
function getCurrentInterestRate() {
    const random = Math.ceil(Math.random() * 10);  
    if (random === 1) {
        throw new Error("Interest Rate API is down.");
    } else {
        return 3.9;
    }
};

function calcFutureValue(investment, years) {
    // convert to numeric values
    investment = parseFloat(investment);
    years = parseInt(years);

    // throw error if investment and years aren't numbers greater than zero
    if (isNaN(investment) || investment <= 0) {
        throw new Error("Investment amount must be a number greater than zero.");
    }
    if (isNaN(years) || years <= 0) {
        throw new Error("Years must be a number greater than zero.");
    }

    // get interest rate - throw error if service returns an error
    let rate = 0;
    try {
        rate = getCurrentInterestRate();
    } catch(e) {
        throw new Error("Unable to calculate future value. " + e.message);
    }

    // if no errors, calculate and return future value
    let futureValue = investment;
    for (let i = 1; i <= years; i++) {
        futureValue += futureValue * rate / 100;
    }
    return Number(futureValue.toFixed(2));
};