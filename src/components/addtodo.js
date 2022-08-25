import {useState} from 'react'

export const AddTodo = ()=>{
    const [value,setValue]= useState("");
    return(
        <div>
            <input onChange={(event)=>{setValue(event.target.value)}}/>
            <button onClick={()=>{console.log(value)}}>Add</button>
        </div>
    )
}