// Task 1

console.log(greetStudent("Anton"));
console.log(greetStudent("Gegelman", "Prof."));

function greetStudent(name: string, honorific?: string): string {
  return `Hello, ${honorific ?? "Student"} ${name}`;
}



// Task 2

console.log(totalCredits(1, 2, 3, 4));

function totalCredits(...credits: Array<number>): number {
  return credits.reduce((accumulator, currentValue): number => accumulator + currentValue, 0);
}



// Task 3

console.log(applyToScores([100, 90, 80, 70], scoreFormatter));

type ScoreFormatter = (value: number) => string;

function scoreFormatter(score: number): string {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else {
    return "C";
  }
}

function applyToScores(scores: Array<number>, fn: ScoreFormatter): Array<string> {
  return scores.map(fn);
}