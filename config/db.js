import mongoose from "mongoose";

export default async function db() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/task-manager");
    console.log("Connected to db");
  } catch (error) {
    console.log("failed to connect db");
  }
}
