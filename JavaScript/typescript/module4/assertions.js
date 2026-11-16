"use strict";
// Task 1
Object.defineProperty(exports, "__esModule", { value: true });
function parseUser(json) {
    return JSON.parse(json);
}
console.log(parseUser("{\"id\": 1, \"name\": \"Ada\"}"));
const roster = [
    {
        id: 1,
        name: "Anton, Yehoshua"
    },
    {
        id: 2,
        name: "Anton, Aryeh"
    }
];
function getStudentName(id) {
    return roster.find(student => student.id === id).name;
}
console.log(getStudentName(1));
console.log(getStudentName(2));
//# sourceMappingURL=assertions.js.map