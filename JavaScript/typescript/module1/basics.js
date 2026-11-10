"use strict";
// Tasks 1 and 2
Object.defineProperty(exports, "__esModule", { value: true });
let studentName;
let studentAge;
let isFullTime;
const courseGrade = [100, 100, 100, 100];
const studentCoordinates = [1, 2];
console.log(averageGrade(courseGrade));
function averageGrade(grades) {
    let average = 0;
    grades.forEach((grade) => {
        average += grade;
    });
    return average /= grades.length;
}
// Task 3
// Added type "string" or "number" to allow for casting
let price = "19.99";
price = 19.99;
// Added type "number" to the function
function double(n) {
    return n * 2;
}
// Removed type "string" from the array type "number"
let scores = [10, 20, 30];
// Removed type "string" from the tuple type "number"
let userInfo = ["Sam", 22];
// Added type "null" for strict mode
let maybeName = null;
//# sourceMappingURL=basics.js.map