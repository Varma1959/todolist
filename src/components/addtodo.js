import {useEffect, useState} from 'react'
import { TextField, Button} from '@material-ui/core';
import {addTodoApi} from '../api'

export const AddTodo = ()=>{
    const [value,setValue]= useState("");

    return(
        <div>
            <TextField id="filled-basic" label="outlined" variant="outlined" onChange={(event) => { setValue(event.target.value) }} />
            <Button variant="contained" onClick={() => { addTodoApi( { title: value, done:false }) }}      >
                ADD </Button>
        </div>
    )
}