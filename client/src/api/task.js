import axios from './axios';

export const getTasksRequest = () => axios.get("/tasks");
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);
export const createTaskRequest = (task) => axios.post("/CreateTask", task);
export const updateTaskRequest = (id, task) => axios.put(`/updateTask/${id}`, task);
export const deleteTaskRequest = (id) => axios.delete(`/deleteTask/${id}`);
