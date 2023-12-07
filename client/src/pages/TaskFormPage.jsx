import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks();
  const navigate = useNavigate();

  // Función para obtener la ubicación actual
  const obtenerUbicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (posicion) => {
          const latitud = posicion.coords.latitude;
          const longitud = posicion.coords.longitude;

          // Rellenar los campos de latitude y longitude en el formulario
          document.getElementById('latitude').value = latitud;
          document.getElementById('longitude').value = longitud;
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      alert('Los servicios de geolocalización no están disponibles');
    }
  };

  // Llamar a obtenerUbicacion cuando el componente se monta
  useEffect(() => {
    obtenerUbicacion();
  }, []); 

  const onSubmit = (data) => {
    // Llamar a createTask con los datos del formulario
    createTask(data);
    navigate('/tasks');
  };

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-500 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-extrabold">Crear una tarea</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register('title', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Titulo"
          />
          <input
            type="text"
            {...register('description', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Descripción"
          />
          {/* Añadir campos ocultos para latitude y longitude */}
          <input type="text" {...register('latitude', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          id="latitude" />
          <input type="text" {...register('longitude', { required: true })} 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          id="longitude"/>


          <button type="submit">Crear...</button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
