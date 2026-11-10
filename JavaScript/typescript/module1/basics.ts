// Tasks 1 and 2

let studentName: string;
let studentAge: number;
let isFullTime: boolean;
const courseGrade: Array<number> = [100, 100, 100, 100];
const studentCoordinates: [number, number] = [1, 2];

console.log(averageGrade(courseGrade));

function averageGrade(grades: Array<number>): number {
  let average = 0;
  grades.forEach((grade) => {
    average += grade;
  });
  return average /= grades.length;
}



// Task 3

// Added type "string" or "number" to allow for casting

let price: string | number = "19.99";
price = 19.99;

// Added type "number" to the function

function double(n: number) {
  return n * 2;
}

// Removed type "string" from the array type "number"

let scores: number[] = [10, 20, 30];

// Removed type "string" from the tuple type "number"

let userInfo: [string, number] = ["Sam", 22];

// Added type "null" for strict mode

let maybeName: string | null = null;
