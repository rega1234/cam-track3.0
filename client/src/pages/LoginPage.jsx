import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LogInPage (){

    const {register, handleSubmit, formState: {errors}, } = useForm();
    const {signin, errors: signinErrors, isAuthenticated} = useAuth();
    const onSubmit = handleSubmit((data) => {
        signin(data);
    });
    const navigate = useNavigate();

    useEffect(() =>{
        if(isAuthenticated) navigate("/tasks");
    }, [isAuthenticated]);

    return(
        <div className=' flex h-[calc(100vh-100px)] items-center justify-center'>
           <div className=' bg-zinc-500 max-w-md w-full p-10 rounded-md'>
           {
                signinErrors.map ((error, i) => (
                    <div className=' bg-red-950 p-2 text-white text-center my-2' key={i}>
                        {error}
                    </div>
                ))
            }
            <h1 className=' text-2xl font-extrabold'>Pagina de inicio de sesion</h1>
            <form
                onSubmit={onSubmit} 
            >
                <input type="email" {...register("email", { required : true })} 
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Correo'
                />
                {
                    errors.email && (
                        <p className='  text-red-950'>El correo es requerido</p>
                )}
                <input type="password" {...register("password", { required : true })} 
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='contraseña'
                />
                {
                    errors.password && (
                        <p className=' text-red-950'>Verifica tu contraseña</p>
                )}
                <button type='submit'>Ingresar</button>
            </form>
            <p className='flex gap-x-2 justify-between'>
                No tienes una cuenta aun? <Link to='/register' className=' text-sky-600'>Crear una cuenta</Link>
            </p>
           </div> 
        </div>
    )
}

export default LogInPage