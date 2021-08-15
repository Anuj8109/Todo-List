import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <>
        <div className="container">
           <h4>{todo.title}</h4>
           <p className="my-1">{todo.desc}</p>
           <button className="btn btn-sm btn-danger mb-2" onClick={() => {onDelete(todo)}}>Delete</button>
        </div>
        <hr></hr>
        </>
    )
}
