import { get } from "mongoose";
import { useTasks } from "../context/TaskContext";
import {Link} from 'react-router-dom';
function TaskCard({ task }){
    const {deleteTask} = useTasks();
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className=" flex justify-between">
                <h1 className="text-2xl font-bold">{task.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <button
                        onClick={ () =>{
                            deleteTask(task._id);
                        }}
                    >delete</button>
                    <Link to={`/task/${task._id}`}>Editar</Link>
                    <a
                        href={`../pages/ma.html?lon=${task.longitude}&lat=${task.latitude}`}
                        target="_blank" // Abre el enlace en una nueva pestaña
                    >
                        Ver Ubicacion
                    </a>
                </div>
            </header>
            <p className="text-slate-300">{task.description}</p>
            <p>{new Date(task.date).toLocaleDateString()}</p>
        </div>
    );
}

export default TaskCard; 
