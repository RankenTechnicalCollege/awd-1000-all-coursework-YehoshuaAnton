import taskStorage from 'task_storage';

let tasks = [];         // private variable

const taskList = {
    load() {
        tasks = taskStorage.retrieve();
        return this;
    },
    save() {
        taskStorage.store(tasks);
        return this;
    },
    add(task) {
        tasks.push(task);
        return this;
    },
    delete(i) {
        this.sortByDueDate(); // sort so in same order as page
        tasks.splice(i, 1);
        return this;
    },
    clear() {
        tasks.length = 0;
        taskStorage.remove();
        return this;
    },
    sortByDueDate() {
        tasks.sort((a, b) => a.dueDate - b.dueDate);
        return this;
    },
    *[Symbol.iterator]() { 
        for (let task of tasks) {
            yield task;
        }
    }
};

export default taskList;