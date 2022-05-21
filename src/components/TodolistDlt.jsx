import React, {useState} from 'react'
import {nanoid} from 'nanoid'
import TodoItems from './TodoItems'
export default function TodolistDlt() {
const [task, setTask] = useState("")
const [arr, setArr] = useState([])

const handleChange =(el)=>{
    
        setTask(el.target.value)

    }
     const handleClick=()=>{
        let objArr = {title:task, id:nanoid()}
        setArr([objArr, ...arr])
        setTask("")
        

    }  
  return (
    
     <>   
     <h1>Make To Do List</h1>
     <div className='inputBox'>
      
         <input value={task}  type="text" placeholder='Write Something' onChange={handleChange} />
         <button onClick={handleClick} >+</button>
    </div>
       {arr.map((item)=>{

           return <TodoItems key={item.id}{...item}   />
       })}

     </>
    

  )
}
