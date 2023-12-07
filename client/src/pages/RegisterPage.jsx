import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect} from 'react';
import { useNavigate, Link  } from 'react-router-dom';

function RegisterPage (){
    const { register, handleSubmit, formState: {errors}, } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) navigate("/tasks");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit( async (values) => {
        signup(values);
    });
    return(
        
        <div className=' flex h-[calc(100vh-100px)] items-center justify-center'>
           <div className=' bg-zinc-500 max-w-md w-full p-10 rounded-md'>
                {
                    registerErrors.map ((error, i) => (
                        <div className=' bg-red-500 p-2 text-white text-center my-2' key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className=' text-2xl font-extrabold'>Pagina de registro de usuarios</h1>
                <form
                    onSubmit={onSubmit} 
                >
                    <input type="text" {...register("username", { required : true })} 
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Usuario'
                    />
                    {
                        errors.username && (
                            <p className=' text-red-500'>El usuario es requerido</p>
                    )}
                    <input type="email" {...register("email", { required : true })} 
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Correo'
                    />
                    {
                        errors.email && (
                            <p className=' text-red-500'>El correo es requerido</p>
                    )}
                    <input type="password" {...register("password", { required : true })} 
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='contraseña'
                    />
                    {
                        errors.password && (
                            <p className=' text-red-500'>Verifica tu contraseña</p>
                    )}
                    <button
                        className=" bg-zinc-900 hover:bg-zinc-700 text-white px-4 py-2 rounded-md"

                    type='submit'>Registrar</button>
                </form>
                <p className='flex gap-x-2 justify-between'>
                    Ya tienes una cuenta? <Link to='/login' className=' text-sky-600'>Inicio de sesion</Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage