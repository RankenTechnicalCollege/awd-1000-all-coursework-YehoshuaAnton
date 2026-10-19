"use strict";

const getElement = selector => document.querySelector(selector);

const getDisplayString = tasks => {
    if (tasks.length === 0) {
        return "";
    } else {
        // convert stored date string (second element) to Date object
        tasks = tasks.map(task => [task[0], new Date(task[1])]);

        // sort by date (second element)
        tasks.sort((task1, task2) => task1[1] - task2[1]);

        // return display string – concat date and event
        return tasks.reduce((str, task) => 
            str += task[1].toDateString() + " - " + task[0] + "\n", "");
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const taskString = localStorage.tasks ?? null;
    const tasks = JSON.parse(taskString) ?? [];

    getElement("#add_task").addEventListener("click", () => {
        getElement("#message").textContent = ""; // clear previous message

        const task = getElement("#task").value;
        const dateString = getElement("#due_date").value;
        const dueDate = new Date(dateString);
        
        if (task && dateString && dueDate != "Invalid Date") {
            tasks.push([task, dueDate]);  
            localStorage.tasks = JSON.stringify(tasks);

            getElement("#task").value = "";
            getElement("#due_date").value = "";
            getElement("#task_list").value = getDisplayString(tasks);
            getElement("#task").focus();
        } else {
            getElement("#message").textContent = "Please enter a task and valid due date.";
            getElement("#task").select();
        }
    });
    
    getElement("#clear_tasks").addEventListener("click", () => {
        tasks.length = 0;
        localStorage.removeItem("tasks");
        getElement("#task_list").value = "";
        getElement("#task").focus();
    });   
    
    getElement("#task_list").value = getDisplayString(tasks);
    getElement("#task").focus();
});