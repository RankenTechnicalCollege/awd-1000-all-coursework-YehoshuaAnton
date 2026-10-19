export function calcFutureValue(investment, rate, years) {
    let futureValue = investment;
    for (let i = 1; i <= years; i++) {
        futureValue += futureValue * rate / 100;
    }
    return futureValue;
}