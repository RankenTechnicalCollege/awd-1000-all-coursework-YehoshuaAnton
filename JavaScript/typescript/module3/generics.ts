// Task 1

function getLastItem<T>(items: Array<T>): T | undefined {
  return items[items.length - 1];
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["A", "B", "C"]));



// Task 2

function describeCollection<T extends { length: number }>(collection: T): string {
  return `This collection has ${collection.length} items`;
}

console.log(describeCollection(["A", "B", "C"]));
console.log(describeCollection("Hello, World!"));
//console.log(describeCollection(42)); // Would not compile