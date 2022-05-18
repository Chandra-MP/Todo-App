import React from "react";
import { Todoitem } from "./Todoitem";
import '../App.css'

export function Todos(props) {
  let today = new Date();
  let notodo = 'No Todos to Display!!';
  return (
    <div className="container">
      <div className="row">
        <div className="TodoHeading col-8 ">
          <h3 style={{fontWeight: 900, color: "cyan"}}>Todos-List</h3>
        </div>
        <div className="date col-4">
          <h6 style={{fontWeight: 400, color: "cyan"}}>
            {today.getDate() + "."}
            {today.getMonth() + 1}
            {"." + today.getFullYear()}
          </h6>
        </div>
        <hr style={{color: "cyan", fontSize:"10px", height:"4px"}}/>
      </div>
    
      {props.todos.length === 0
        ? notodo
        : props.todos.map((todo) => {
            return (
              <Todoitem todos={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}

export default Todos;
