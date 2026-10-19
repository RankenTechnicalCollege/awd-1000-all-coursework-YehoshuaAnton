// import statements
import express from "express";
import cors from "cors";
import * as data from "./data.mjs";

// create object to handle requests
const app = express();

// set up middleware
app.use(cors());
app.use(express.json());

// set up API routes
app.get("/", (request, response) => {
	response.json({ info: "A simple API for maintaining a task list." })
});
app.get("/tasks", data.getTasks);
app.post("/tasks", data.addTask);
app.delete("/tasks", data.deleteTasks);

// start the server
app.listen(3000, () => {
	console.log("API running on port 3000.")
});