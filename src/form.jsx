import React, { useState } from 'react'

const AddTodo = ({todos,setTodos}) => {
const [todo,setTodo] = useState('')
const [description,setDescription] = useState('')
const [error,setError] = useState(false)
 const handleSubmit = (e) =>{
    e.preventDefault()
    if(!todo ){
        setError(true)
    }else{
        setError(false)
     const arr = [...todos,{todo,description}]
    setTodos(arr)
    localStorage.setItem('todos',JSON.stringify(arr))
    setTodo('')
    setDescription('')
    }  
 } 
  return (
    <form className='flex flex-col items-center  mb-5' onSubmit={handleSubmit} noValidate>
        <label className='h-16'>
        <input 
            type='text'
            required
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            placeholder='Enter Todo'
            className='focus:outline-none p-1 bg-transparent border border-gray-200 text-gray-200 rounded-md'
            />
            {error  && <p className='text-red-600 text-sm'>Please enter Todo</p>}
        </label> 
        <label className='h-16'>
        <input 
            type='text'
            required
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            placeholder='Enter Description'
            className='focus:outline-none p-1 bg-transparent border border-gray-200 text-gray-200 rounded-md'
        />
        </label>
        <button type='submit' className='p-2 bg-amber-400 rounded text-white text-sm font-bold'>Submit</button>
    </form>
  )
}

export default AddTodo