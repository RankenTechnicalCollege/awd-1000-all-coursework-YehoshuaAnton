"use strict";

const url = "http://127.0.0.1:3000/tasks";

const getElement = selector => document.querySelector(selector);

const displayTasks = tasks => {
    const txtarea = getElement("#tasks");
    txtarea.textContent = tasks.join("\n");

    getElement("#task").value = "";
    getElement("#task").focus();
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        if (json.error) {
            alert(json.error.message);
        } else {
            displayTasks(json);
        }
    } catch(e) {
        alert(e.message);
    }

    getElement("#add_task").addEventListener("click", async () => {
        const task = getElement("#task").value;
        if (task == "") {
            alert("Please enter a task");
        } else {   
            try {
                const options = {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({task})
                };
                let response = await fetch(url, options);
                const json = await response.json();

                if (json.error) {
                    alert(json.error.message);
                } else {
                    response = await fetch(url);
                    displayTasks(await response.json());
                }
            } catch(e) {
                alert(e.message);
            } 
        } 
    });
    
    getElement("#clear_tasks").addEventListener("click", async () => {
        try {
            let response = await fetch(url, {method:"DELETE"});
            const json = await response.json();

            if (json.error) {
                alert(json.error.message);
            } else {
                response = await fetch(url);
                displayTasks(await response.json());
            }
        } catch(e) {
            alert(e.message);
        }
    });  

});