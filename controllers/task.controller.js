import Task from "../models/task.js";

class TaskController {
  add = async (req, res) => {
    const { description, status } = req.body;

    const task = new Task({
      description,
      status,
    });

    try {
      await task.save();
      res.json({ message: "Task added", task });
    } catch (err) {
      console.log(err);
    }
  };

  getAll = async (req, res) => {
    try {
      const tasks = await Task.find();

      res.json(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  delete = async (req, res) => {
    const taskId = req.params.id;

    try {
      // await Task.deleteOne({ _id: taskId });
      // or
      await Task.findByIdAndDelete(taskId);

      res.json({ message: `Task with ${taskId} deleted!` });
    } catch (err) {
      console.log(err);
    }
  };
}

export const taskController = new TaskController();
