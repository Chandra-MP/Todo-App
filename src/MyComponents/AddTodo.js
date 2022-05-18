import { React, useState } from "react";
import "../App.css";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleChangeDesc = (e) => setDesc(e.target.value);
  const handleChangeTitle = (e) => setTitle(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("title or Description not found!");
      return undefined;
    }
    props.addTodos(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container">
      <h3 className="py-3 my-2" style={{fontWeight: 900, color: "cyan"}}>Add Todo</h3>
      <hr style={{color: "cyan", height:"4px"}}/>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label htmlFor="title"><p style={{fontWeight: 600, color: "cyan" }}>Todo Title</p></label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Type here"
            value={title}
            onChange={handleChangeTitle}
          />
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="desc"><p style={{fontWeight: 600, color: "cyan" }}>Todo Description</p></label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Description"
            value={desc}
            onChange={handleChangeDesc}
          />
        </div>
        <div className="form-group form-check"></div>
        <button type="submit" className="btn btn-info btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
