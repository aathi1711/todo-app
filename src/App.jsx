import { useEffect, useState } from "react"
import AddTodo from "./form"
import Todos from "./todos"


function App() {
  const [todos,setTodos] = useState([])
  useEffect(()=>{
     setTodos(JSON.parse(localStorage.getItem('todos')))
  },[])
  return (
    <div className="font-poppins flex items-center flex-col w-full min-h-screen bg-slate-700">
      <div className="p-2 text-center text-white ">
      <h1 className="text-3xl font-bold mb-5">Todo Application</h1>
      <p className="opacity-80 mb-5">You can add and manage your task here</p>
      </div>
    
     <AddTodo todos = {todos} setTodos = {setTodos}/>
     <Todos todos = {todos} setTodos = {setTodos}/>
    </div>
  )
}

export default App
