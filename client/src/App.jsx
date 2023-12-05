import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LogInPage from "./pages/LoginPage"
import { AuthProvider } from "./context/AuthContext"

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/login' element={<LogInPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/tasks' element={<h1>Tareas</h1>} />
        <Route path='/task/:id' element={<h1>Actualizar tarea</h1>} />
        <Route path='/profile' element={<h1>Perfil</h1>} />
      </Routes>
     </BrowserRouter>
    </AuthProvider>
     
  )
}

export default App