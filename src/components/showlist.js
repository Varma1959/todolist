import {useState, useEffect} from 'react'
import { Radio, Button } from '@material-ui/core'
import { getApiData } from '../api'

export const ShowTodos = ()=>{
    const [todos, setTodos] = useState([])
    useEffect(() => {
        getApiData().then((response) => { setTodos(response.data) }).catch((e)=>{console.log(e)})
    })
    return(
        <div>
            {todos.map((todo)=>{return (
            <div key={todo.title}>
                    <Radio
                        value={todo.value}
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                <p>{todo.title}</p>
                    <Button variant="outlined">
                        Delete
                    </Button>
            </div>
            )})}
        </div>
    )
}