import {AddTodo} from './addtodo'
import { ShowTodos } from './showlist'
export const TodoList = ()=>{
    return(
        <div>
            <AddTodo />
            <ShowTodos/>
        </div>
    )
}