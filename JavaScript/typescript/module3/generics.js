"use strict";
// Task 1
Object.defineProperty(exports, "__esModule", { value: true });
function getLastItem(items) {
    return items[items.length - 1];
}
console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["A", "B", "C"]));
// Task 2
function describeCollection(collection) {
    return `This collection has ${collection.length} items`;
}
console.log(describeCollection(["A", "B", "C"]));
console.log(describeCollection("Hello, World!"));
//console.log(describeCollection(42)); // Would not compile
//# sourceMappingURL=generics.js.map