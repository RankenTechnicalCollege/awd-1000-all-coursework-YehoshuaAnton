"use strict";
// Task 1
Object.defineProperty(exports, "__esModule", { value: true });
console.log(greetStudent("Anton"));
console.log(greetStudent("Gegelman", "Prof."));
function greetStudent(name, honorific) {
    return `Hello, ${honorific ?? "Student"} ${name}`;
}
// Task 2
console.log(totalCredits(1, 2, 3, 4));
function totalCredits(...credits) {
    return credits.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
// Task 3
console.log(applyToScores([100, 90, 80, 70], scoreFormatter));
function scoreFormatter(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else {
        return "C";
    }
}
function applyToScores(scores, fn) {
    return scores.map(fn);
}
//# sourceMappingURL=function.js.map