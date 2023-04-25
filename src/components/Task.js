import React from "react";
// import { TASKS } from "../data";

function Task ({ task, onDeleteTask }) {
  const handleDeleteClick = () => {
    onDeleteTask(task.id);
  };

function Task({text, category, onDeleteTask}) {
  // console.log(text)
  // console.log(category)
  function handleClick(){
    onDeleteTask(text);
  }
  return (
    <div className="task">
      <div className="label">{task.text}</div>
      <div className="text">{task.category}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
};


}

export default Task;
