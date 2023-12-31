import Task from '../models/task.model.js';
import { replicationTxtFiles } from './replication.controller.js';


export const getTasks = async (req, res) => {
     const tasks = await Task.find({
        user: req.user.id
     }).populate('user')
     res.json(tasks);
};

export const createTask = async (req, res) => {
    try {
        const { title, description, date, longitude, latitude } = req.body;
        const newTask = new Task({
          title,
          description,
          date,
          longitude,
          latitude,
          user: req.user.id,
        });
        const savedTask = await newTask.save();
        res.json(savedTask);
        replicationTxtFiles("tasks");

    } catch (error) {
        return res.status(404).json({ message: "failed" });
    }
};

export const getTask = async (req, res) => {
    const taskToFind = await Task.findById(req.params.id);
    if(!taskToFind) return res.status(404).json({ message: "Task not found" });
    res.json(taskToFind);
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task) return res.status(404).json({ message: "task not found" });
        res.json(task);
        replicationTxtFiles("tasks");
    } catch (error) {
        return res.status(404).json({ message: "task not found" });
    }
    
};

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if(!task) return res.status(404).json({ message: "task not found" });
        replicationTxtFiles("tasks");
        res.json(task);
    } catch (error) {
        return res.status(404).json({ message: "task not found" });
    }
};

