// TaskPage.js
import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import  TaskCard  from "../components/TaskCard"
function TaskPage() {
    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    if(tasks.length === 0 ) return (<h1>No hay tareas aun...</h1>);

    return (
        <div className=" grid grid-cols-3 gap-2">
            {tasks.map((task) => (
                <TaskCard task={task} key={task._id} />
            ))}
        </div>
    );
}

export default TaskPage;