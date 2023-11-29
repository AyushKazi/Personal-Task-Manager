import express from "express";
import db from "./config/db.js";
import { taskController } from "./controllers/task.controller.js";

const app = express();

const PORT = 3000;

//calling db function to connect to mongoose database
db();

//parsing request into json
app.use(express.json());

//searching for all the existing tasks
//GET: get all tasks
app.get("/tasks", taskController.getAll);

//POST : adding new task
app.post("/tasks", taskController.add);

// DELETE: Deletion of a task by ID from params
app.delete("/tasks/:id", taskController.delete);

app.use("/", (req, res) => {
  res.send("Welcome!!!!!!!!");
});

app.use((req, res) => {
  res.send("Error!");
});

app.listen(PORT, async () => {
  console.log(`express server running on ${PORT}`);
});
