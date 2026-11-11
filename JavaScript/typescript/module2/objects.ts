// Task 1

interface Course {
  id: number;
  title: string;
  readonly courseCode: string;
  credits?: number;
}



// Task 2

const course1: Course = {
  id: 1,
  title: "a",
  courseCode: "abc"
}

//course1.courseCode = "xyz";



// Task 3

interface OnlineCourse extends Course {
  platformUrl: string;
}

const course2: OnlineCourse = {
  id: 2,
  title: "b",
  courseCode: "abc",
  credits: 120,
  platformUrl: "def"
}

console.log(course1);
console.log(course2);