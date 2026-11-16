// Task 1

type Grade = "A" | "B" | "C" | "D" | "F";

function setGPA(grade: Grade): Number {
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



// Task 2

type MultipleChoice = {
  type: "multiple-choice";
  totalQuestions: number;
  correctAnswers: number;
};

type Essay = {
  type: "essay";
  wordCount: number;
  rubricScore: number; // Out of 10
};

type Assignment = MultipleChoice | Essay;

function calculateScore(assignment: Assignment): number {
  switch (assignment.type) {
    case "multiple-choice":
      return Math.round((assignment.correctAnswers / assignment.totalQuestions) * 100);
    case "essay":
      return assignment.rubricScore * 10;
  }
}

const multipleChoice: MultipleChoice = {
  type: "multiple-choice",
  totalQuestions: 20,
  correctAnswers: 18
}

const essay: Essay = {
  type: "essay",
  wordCount: 150,
  rubricScore: 9
}

console.log(calculateScore(multipleChoice));
console.log(calculateScore(essay));