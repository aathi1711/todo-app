import React, { useState } from 'react'

const Card = ({todo,index,todos,setTodos}) => {
    const [open,setOpen] = useState(false)
    const [selected,setSelected] = useState( todo.status || 'Not completed')
    const options = ['Completed','Not Completed']
    const handleSelect = (option) =>{
        setSelected(option)
        setOpen(false)
       todos[index].status = option
       localStorage.setItem('todos',JSON.stringify(todos))
    }
    const handleDelete = ()=>{
        const deleted = todos.filter((todo,idx)=> idx !=index)
        setTodos(deleted)
        localStorage.setItem('todos',JSON.stringify(deleted))
    }
    const handleOpen = () =>{
       if(open){
        setOpen(false)
       }else{
        setOpen(true)
       }
    }
  return (
    <div className='shadow-md bg-slate-600 rounded p-2 w-80 h-48 flex flex-col justify-between'>
        <div className='text-gray-200'>
        <p ><strong>Task:</strong>{todo.todo}</p>
      <p><strong>Description:</strong>{todo.description}</p>
       <div className='flex items-start'><strong>status: </strong> 
        <div className='ml-2 bg-gray-100 min-w-32 rounded text-black text-sm p-1'>
        <div  onClick={handleOpen} className={`${selected=='Completed' ? 'text-green-700':'text-red-700'} flex justify-between`}>
             <p >{selected}</p>
              <p>▼</p></div>
        <div className='text-gray-700'> 
        {open && options.map((option)=>{
         return <div onClick={()=>handleSelect(option)} >{option}</div>
        })}
        </div>
        </div>
        </div>
        </div>
        <button onClick={handleDelete} className='bg-red-400 rounded p-1 text-gray-200 font-semibold'>Delete</button>
       
    </div>
  )
}

export default Card