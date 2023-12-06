import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"
import { TaskProvider } from "./context/TaskContext";

import RegisterPage from "./pages/RegisterPage";
import LogInPage from "./pages/LoginPage";
import TaskPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";


function App(){
  return(
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <Navbar/>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/login' element={<LogInPage/>} />
              <Route path='/register' element={<RegisterPage/>} />
              <Route element={<ProtectedRoute/>}>
                <Route path='/tasks' element={<TaskPage/>} />
                <Route path="/add-task" element={<TaskFormPage/>} />
                <Route path='/task/:id' element={<TaskFormPage/>} />
                <Route path='/profile' element={<ProfilePage/>} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
     
  )
}

export default App