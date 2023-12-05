import express from "express";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js';
import cookieParser from "cookie-parser";
import taskRoutes from './routes/tasks.routes.js';
import cors from 'cors';

const app = express({
    origin: "http://localhost:5173"
});
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api', authRoutes);
app.use('/api', taskRoutes);


export default app;