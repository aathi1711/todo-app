import React from 'react'
import Card from './card'

const Todos = ({todos,setTodos}) => {
  return (
    <div>
        <h1 className='text-2xl font-semibold text-gray-200 p-1'>Your Todos :</h1>
        <div className='flex gap-2 justify-center flex-wrap'>
          { 
          
          todos.map((todo,index)=>{
            return <Card todo={todo} key={index} index={index} todos = {todos} setTodos={setTodos}/>
          })}
        </div>
    </div>
  )
}

export default Todos