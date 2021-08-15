import './App.css';
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer"
import {Todos} from "./MyComponent/Todos"
import AddTodo from "./MyComponent/AddTodo"
import React ,{useState,useEffect} from "react"
import About from "./MyComponent/About"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  let inittodos;
  if(localStorage.getItem("todos") === null){
    inittodos = [];
  }else{
    inittodos =JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    // console.log("Deleting Element",todo);
    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
    // useEffect(() => {
    //   localStorage.setItem("todos",JSON.stringify(todos));
    // }, [todos])
    // localStorage.setItem("todos",JSON.stringify(todos));

  }
  const addTodo = (title,desc) => {
    // console.log("add todo this",title,desc)
    let l;
    if( todos.length === 0){
      l = 1;
    }else{
      l = todos[todos.length - 1].item + 1
    }
    // console.log(l)
    setTodos([...todos,{
      item : l,
      title : title,
      desc : desc
    }])

  }
  
  const [todos,setTodos] = useState(inittodos);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  return (
    <>
    <Router>
      <Header title="My Todo List" searchBar={false} />
      <Switch>
          <Route exact path="/" render = {()=>{
            return(
              <>
              <AddTodo addTodo = {addTodo}/>
              <Todos todos = {todos} onDelete={onDelete}/>
              </>
            )
          }}>
            {/* <Home /> */}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      
      <Footer />
    </Router>
    </>

    // <div classNameName="app">
    //   <h2 classNameName="App-header">Heading {le}</h2>
    //   <p classNameName="App-link">csnzk</p>
    // </div> 
  );
}

export default App;

