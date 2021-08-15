import React from "react"
import {TodoItem} from "./TodoItem"

export const Todos = ({todos,onDelete}) => {
    let myStyle = {
        marginBottom : "20px"
    }
    return(
        <div className="container mb-5" style={myStyle}>
            <h3 className="mt-3 mb-3">Todo List</h3>
            {todos.length === 0 ? "No ToDo to display" : 
                todos.map((todo) => {
                    return (
                        <TodoItem  key= {todo.item} todo={todo} onDelete = {onDelete}/>
                    ) 
                })
            }
        </div>
    )
}

