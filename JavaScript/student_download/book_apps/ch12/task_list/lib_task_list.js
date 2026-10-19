"use strict";

class TaskList {
    #tasks = null;
    constructor() {
        this.#tasks = [];
    }
    load() {
        this.#tasks = storage.retrieve();
        return this;
    }
    save() {
        storage.store(this.#tasks);
        return this;
    }
    sortByDueDate() {
        this.#tasks.sort((a, b) => a.dueDate - b.dueDate);
        return this;
    }
    add(task) {
        this.#tasks.push(task);
        return this;
    }
    delete(i) {
        this.sortByDueDate(); // sort so in same order as page
        this.#tasks.splice(i, 1);
        return this;
    }
    clear() {
        this.#tasks.length = 0;
        storage.clear();
        return this;
    }
    *[Symbol.iterator]() { 
        for (let task of this.#tasks) {
            yield task;
        }
    }
};