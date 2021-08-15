import React,{useState} from 'react'
// import {todos} from "../App/todo"

export default function AddTodo({addTodo}) {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const onAddTodo = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Add Title or Description")
        }else{
            addTodo(title,desc);
            setTitle("")
            setDesc("")
        }
    }
    return (
        <div className="container my-3">
            
            <h3>Add a ToDo</h3>
            <form onSubmit = {onAddTodo}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="title" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="paragraph" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" required/>
                </div>
                <button type="submit" className="btn btm-sm btn-success" onClick={onAddTodo}>Submit</button>
            </form>
        </div>
    )
}
