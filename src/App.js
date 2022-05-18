import "./App.css";
import React, { useState, useEffect} from "react";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import About  from './MyComponents/About'
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

function App() {

  let innitTodo;
  if (localStorage.getItem("todos") === null) {
    innitTodo = [];
  } else {
    innitTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(innitTodo); // Defines the todos state

  const addTodos = (title, desc) => {
    console.log("Todo Added!");
    let sno;
    if (todos.length === 0) sno = 0;
    else sno = todos[todos.length - 1].sno + 1;
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo, myTodo.sno);
  };

  const onDelete = (todo) => {
    setTodos(
      todos.filter((state) => {
        return state !== todo;
      })
    );
    // console.log(localStorage.getItem("todos")); //gives the current todos after filtering

    // localStorage.setItem("todos", JSON.stringify(todos)); // useEffect takes cares of it whenever Todos are modified
  };

 useEffect(() => { //useEffect hook used to update local storage whenver Todos are updated! ie setTodos is called!!

    localStorage.setItem("todos", JSON.stringify(todos)); // saves the todos in Browser Local Storage whenever todos is changed
    
  }, [todos]);

  
  return (
    <Router>
      <div className="wrapperDiv" id="#wrapperDiv">
        <Header title="MyTodosList" searchBar={false} />

        <Switch>

          <Route exact path="/" render={()=>{
            return (
              <>
              <AddTodo addTodos={addTodos} />
              <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
