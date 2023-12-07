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
                        className=" bg-red-900 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                        onClick={ () =>{
                            deleteTask(task._id);
                        }}
                    >Borrar</button>
                    <Link
                        className=" bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-md"

                    to={`/task/${task._id}`}>Editar</Link>
                </div>
            </header>
            <p className="text-slate-300">{task.description}</p>
            <p>{new Date(task.updatedAt).toLocaleDateString()}</p>
        </div>
    );
}

export default TaskCard; 
