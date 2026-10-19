// import statements
import { readFile, writeFile } from "fs/promises";

const fileName = "tasks.txt";

// private helper functions
async function readTasks() {
    const str = await readFile(fileName, "utf8");
    return JSON.parse(str);
}

async function writeTasks(data) {
    await writeFile(fileName, JSON.stringify(data));
}

// public named exports
export async function getTasks(request, response) {
    try {
        const data = await readTasks();
        response.json(data);
    } catch (e) {
        console.log(e);
        response.json({error:{message:"Unable to get tasks."}});
    }
};

export async function addTask(request, response) {
    try {
        const data = await readTasks();

        const newTask = request.body.task;
        data.push(newTask);
        
        await writeTasks(data);

        response.json(newTask);
    } catch (e) {
        console.log(e);
        response.json({error:{message:"Unable to add task."}});
    }
};

export async function deleteTasks(request, response) {
    try {
        await writeTasks([]);  // write an empty array to clear tasks
        response.json({});
    } catch (e) {
        console.log(e);
        response.json({error:{message:"Unable to delete tasks."}});
    }
};