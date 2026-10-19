"use strict";

const getElement = selector => document.querySelector(selector);

const taskList = new TaskList();

const displayTasks = () => {
    taskList.sortByDueDate();

    const select = getElement("#tasks");
    select.textContent = "";  // clear previous tasks

    for (let task of taskList) {
        const opt = document.createElement("option");
        opt.appendChild(document.createTextNode(task));
        select.appendChild(opt);
    }
    getElement("#task").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    getElement("#add_task").addEventListener("click", () => {
        getElement("#msg").textContent = "";       // clear any previous message
        
        const newTask = new Task(
            getElement("#task").value,
            getElement("#due_date").value);        

        let message = "";
        if (newTask.description === "") {
            message = "Task is required. ";
        }
        if (newTask.hasInvalidDueDate || newTask.isPastDue) {
            message += "Due Date must be a valid date in the future."
        }      
        
        if (message === "") {
            taskList.load().add(newTask).save();
            displayTasks();
            getElement("#task").value = "";
            getElement("#due_date").value = "";
        } else {
            getElement("#msg").textContent = message;
        }
        getElement("#task").select();
    });

    getElement("#clear_tasks").addEventListener("click", () => {
        taskList.clear();
        getElement("#tasks").textContent = "";
        getElement("#task").value = "";
        getElement("#due_date").value = "";
        getElement("#msg").textContent = "";
        getElement("#task").focus();
    });
    
    getElement("#delete_task").addEventListener("click", () => {
        getElement("#msg").textContent = "";       // clear any previous message
        
        const index = getElement("#tasks").selectedIndex;
        if (index === -1) {
            getElement("#msg").textContent = "Please select a task to delete.";
        } else {
            taskList.load().delete(index).save();
            displayTasks();
            getElement("#task").focus();
        }
    });   
    
    taskList.load();
    displayTasks();
});