import {useForm} from 'react-hook-form';
import { useTasks } from '../context/TaskContext';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';

function TaskFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const {createTask, getTask, updateTask } = useTasks();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        async function loadTask() {
            if(params.id){
                const task = await getTask(params.id);
                setValue('title', task.title);
                setValue('description', task.description)
            }
        }
        loadTask()
    }, [])


    const onSubmit = handleSubmit( (data) => {
        if(params.id){
            updateTask(params.id, data)
        }else{
            createTask(data);
        }
        navigate("/tasks");
    });
    
    return (
        <div className=' flex h-[calc(100vh-100px)] items-center justify-center'>
           <div className=' bg-zinc-500 max-w-md w-full p-10 rounded-md'>
            <h1 className=' text-2xl font-extrabold'>Crear una tarea</h1>
            <form
                onSubmit={onSubmit} 
            >
                <label htmlFor="title">Título</label>
                <input type="text" {...register("title", { required : true })} 
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Titulo'
                />
                <label htmlFor="description">Descripcion</label>
                <textarea className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' 
                    cols="4" rows="4" placeholder='Descripción'
                    {...register("description")}>
                </textarea>
                <button className=' bg-indigo-900 rounded-md px-3 py-2' type='submit'>Crear...</button>
            </form>
           </div> 
        </div>
    )
}
export default TaskFormPage