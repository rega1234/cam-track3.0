import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getTask, getTasks, createTask, updateTask, deleteTask } from '../controllers/tasks.controllers.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createTaskSchema } from '../schemas/task.schema.js';


const router = Router();

router.get('/tasks', authRequired, getTasks );
router.get('/tasks/:id', authRequired, getTask );
router.post('/CreateTask', authRequired, validateSchema(createTaskSchema), createTask );
router.put('/updateTask/:id', authRequired, updateTask );
router.delete('/deleteTask/:id', authRequired, deleteTask);



export default router;