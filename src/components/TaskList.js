import React from "react";
import Task from "./Task";


function TaskList({ tasks, onDeleteTask }) {
  console.log(tasks)
  const taskList = tasks.map((task) => (
    <Task key={task} task={task} onDeleteTask={onDeleteTask} />
  ));
  return <div className="tasks">{taskList}</div>;
};

function TaskList({tasks, onDeleteTask}) {
  // console.log(tasks)
  const taskList = tasks.map((task) => {
    return <Task key={task.text} text={task.text} category={task.category} onDeleteTask={onDeleteTask}/>
});
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
