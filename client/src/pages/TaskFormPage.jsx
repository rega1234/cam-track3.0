import {useForm} from 'react-hook-form';
import { useTasks } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom'

function TaskFormPage() {
    const { register, handleSubmit } = useForm();
    const {createTask} = useTasks();
    const navigate = useNavigate();
    const onSubmit = handleSubmit( (data) => {
        createTask(data);
        navigate("/tasks");
    });

    return (
        <div className=' flex h-[calc(100vh-100px)] items-center justify-center'>
           <div className=' bg-zinc-500 max-w-md w-full p-10 rounded-md'>
            <h1 className=' text-2xl font-extrabold'>Crear una tarea</h1>
            <form
                onSubmit={onSubmit} 
            >
                <input type="text" {...register("title", { required : true })} 
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Titulo'
                />
                <input type="text" {...register("description", { required : true })} 
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Descripción'
                />
                <button type='submit'>Crear...</button>
            </form>
           </div> 
        </div>
    )
}
export default TaskFormPage