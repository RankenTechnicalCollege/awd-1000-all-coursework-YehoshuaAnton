class Task {
    constructor(description, dueDate) {
        this.description = description;
        this.dueDate = new Date(dueDate);
    }

    get hasInvalidDueDate() {
        return this.dueDate.toString() === "Invalid Date";
    }
    get isPastDue() {
        const today = new Date();
        return this.dueDate.getTime() < today.getTime();
    }

    toString() {
        return `${this.dueDate.toDateString()} - ${this.description}`;
    }
}

export default Task;