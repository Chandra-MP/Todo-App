import React from "react";
import '../App.css'

export const Todoitem = (props) => {
  return (
    <div>
      <div className="row ">
        <div className="col-4">
          <div className="card">
            <div className="card-body text-info">
              <h5 className="card-title">{(props.todos.title).toUpperCase()}</h5>
              <p className="card-text">{(props.todos.desc.charAt(0).toUpperCase()+props.todos.desc.slice(1)+".")}</p>
              <button
                className="btn btn-sm btn-danger py-2"
                onClick={() => {
                  props.onDelete(props.todos);
                }}
              >
                Delete
              </button>
              {/* <button className="btn btn-sm btn-info py-2">Update</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todoitem;
