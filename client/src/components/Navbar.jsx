import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();
    return (
        <nav className=" bg-zinc-400 my-3 flex justify-between py-5 px-10">
            <Link to= "/">
                <h1 className=" text-2xl font-bold" >Cam-Track</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li>
                            Bienvenido... {user.username}
                        </li>
                        <li>
                            <Link to="/add-task" className=" bg-indigo-400 px-4 py-1 rounded-sm">Crear tareas.</Link>
                        </li>
                        <li>
                            <Link to="/" 
                                onClick={() => {
                                    logout();
                                }}
                            >Cerrar sesion</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login" className=" bg-indigo-400 px-4 py-1 rounded-sm" >Inicio de sesion.</Link>
                        </li>
                        <li>
                            <Link  className=" bg-indigo-400 px-4 py-1 rounded-sm" to="/register">Registro.</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;