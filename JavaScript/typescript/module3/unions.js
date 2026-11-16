"use strict";
// Task 1
Object.defineProperty(exports, "__esModule", { value: true });
function setGPA(grade) {
    switch (grade) {
        case "A":
            return 4;
        case "B":
            return 3;
        case "C":
            return 2;
        case "D":
            return 1;
        case "F":
            return 0;
    }
}
console.log(setGPA("A"));
console.log(setGPA("C"));
console.log(setGPA("F"));
function calculateScore(assignment) {
    switch (assignment.type) {
        case "multiple-choice":
            return Math.round((assignment.correctAnswers / assignment.totalQuestions) * 100);
        case "essay":
            return assignment.rubricScore * 10;
    }
}
const multipleChoice = {
    type: "multiple-choice",
    totalQuestions: 20,
    correctAnswers: 18
};
const essay = {
    type: "essay",
    wordCount: 150,
    rubricScore: 9
};
console.log(calculateScore(multipleChoice));
console.log(calculateScore(essay));
//# sourceMappingURL=unions.js.map