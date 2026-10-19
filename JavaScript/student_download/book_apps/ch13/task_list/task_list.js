import taskList from "task_list";
import Task from "task";
import * as dom from "DOM";

const displayTasks = () => {
    taskList.sortByDueDate();

    const select = dom.get("#tasks");
    select.textContent = "";  // clear previous tasks

    for (let task of taskList) {   
        const opt = document.createElement("option");
        opt.appendChild(document.createTextNode(task));
        select.appendChild(opt);
    }  
    dom.focus("#task");
}

dom.load(() => {
    dom.addClick("#add_task", () => {
        dom.clear("#msg");             // clear any previous message
        
        const newTask = new Task(
            dom.getValue("#task"),
            dom.getValue("#due_date"));  
        
        let message = "";
        if (newTask.description === "") {
            message = "Task is required. ";
        }
        if (newTask.hasInvalidDueDate || newTask.isPastDue) {
            message += "Due Date must be a valid date in the future."
        } 

        if (message === "") {
            taskList.load().add(newTask).save();
            dom.clear("#task");
            dom.clear("#due_date");
            displayTasks();
        } else {
            dom.setText("#msg", message);
            dom.select("#task");
        }     
    });
    
    dom.addClick("#clear_tasks", () => {
        taskList.clear();
        dom.clear("#tasks");
        dom.clear("#task");
        dom.clear("#due_date");
        dom.clear("#msg");
        dom.focus("#task");
    });  

    dom.addClick("#delete_task", () => {
        dom.clear("#msg");             // clear any previous message
        
        const index = dom.get("#tasks").selectedIndex;
        if (index === -1) {
            dom.setText("#msg", "Please select a task to delete.");
        } else {
            taskList.load().delete(index).save();
            displayTasks();
        }
    });
    taskList.load()
    displayTasks();
});