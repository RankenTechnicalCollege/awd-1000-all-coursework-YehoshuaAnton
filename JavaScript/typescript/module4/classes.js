"use strict";
// Task 1
Object.defineProperty(exports, "__esModule", { value: true });
class Gradebook {
    studentName;
    scores;
    constructor(studentName, scores = []) {
        this.studentName = studentName;
        this.scores = scores;
    }
    addScore(score) {
        if (score < 0 || score > 100) {
            throw new Error("Enter a valid score");
        }
        this.scores[this.scores.length] = score;
    }
    getAverage() {
        return Math.round(this.scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / this.scores.length);
    }
    getLetterGrade() {
        if (this.getAverage() >= 90) {
            return "A";
        }
        else if (this.getAverage() >= 80) {
            return "B";
        }
        else if (this.getAverage() >= 70) {
            return "C";
        }
        else if (this.getAverage() >= 60) {
            return "D";
        }
        else {
            return "F";
        }
    }
}
const gradebook = new Gradebook("Anton, Yehoshua", [100, 90, 100, 95, 100, 80]);
console.log(gradebook.getAverage());
console.log(gradebook.getLetterGrade());
//console.log(gradebook.scores); // Would not compile
//# sourceMappingURL=classes.js.map