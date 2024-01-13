
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/New-Year-Todo-App");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

export const todo = mongoose.model('todo',todoSchema);

