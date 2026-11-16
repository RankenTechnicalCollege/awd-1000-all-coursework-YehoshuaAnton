// Task 1

interface ParsedUser {
  id: number;
  name: string;
}

function parseUser(json: string): ParsedUser {
  return JSON.parse(json) as ParsedUser;
}

console.log(parseUser("{\"id\": 1, \"name\": \"Ada\"}"));



// Task 2

type Student = {
  id: number,
  name: string
}

const roster: Array<Student> = [
  {
    id: 1,
    name: "Anton, Yehoshua"
  },
  {
    id: 2,
    name: "Anton, Aryeh"
  }];

function getStudentName(id: number): string {
  return roster.find(student => student.id === id)!.name;
}

console.log(getStudentName(1));
console.log(getStudentName(2));