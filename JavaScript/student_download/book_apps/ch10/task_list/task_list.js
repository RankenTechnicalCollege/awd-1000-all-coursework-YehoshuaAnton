"use strict";

const getElement = selector => document.querySelector(selector);

const getDisplayString = tasks => {
    if (tasks.length === 0) {
        return "";
    } else {
        return tasks.join("\n");
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // get tasks array from web storage
    const tasksStr = localStorage.myTasks ?? null;
    const tasks = JSON.parse(tasksStr) ?? [];

    // display tasks on initial load
    getElement("#task_list").value = getDisplayString(tasks);
    getElement("#task").focus();

    getElement("#add_task").addEventListener("click", () => {   
        const textbox = getElement("#task");
        const task = textbox.value;
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {
            // add task to web storage 
            tasks.push(task);
            localStorage.myTasks = JSON.stringify(tasks);

            // clear task text box and re-display tasks
            textbox.value = "";
            getElement("#task_list").value = getDisplayString(tasks);        
            textbox.focus();
        }
    });
    
    getElement("#clear_tasks").addEventListener("click", () => {
        tasks.length = 0;
        localStorage.removeItem("myTasks");
        getElement("#task_list").value = "";
        getElement("#task").focus();
    });     
});