import * as storage from 'storage';
import Task from 'task';

const taskStorage = {
    retrieve() { 
        const tasks = [];
        const taskArray = storage.retrieve("tasks");
        if(taskArray) {
            for(let obj of taskArray) {
                tasks.push(new Task(obj.description, obj.dueDate)); 
            }
        }
        return tasks;
    },
    store(tasks) { 
        storage.store("tasks", tasks); 
    },
    remove() { 
        storage.remove("tasks"); 
    }
};

export default taskStorage;