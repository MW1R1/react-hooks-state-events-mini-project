import React,{useState} from "react";
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const [categories, setCategories] = useState(CATEGORIES);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (text, category) => {
    const newTask = {
      text: text,
      category: category,
      id: tasks.length + 1,
    };
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  }

  let displayedTasks = tasks;
  if (selectedCategory !== "All") {
    displayedTasks = tasks.filter(
      (task) => task.category === selectedCategory
    );
  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  const displayTasks = tasks.filter(
    (task) => category === "All" || task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory}  onCategoryClick={handleCategoryClick}
      />
      <TaskList tasks={displayedTasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm
        categories={categories.filter((category) => category !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory}/>
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== "All")} onTaskFormSubmit={handleAddTask}/>
        <TaskList onDeleteTask={handleDeleteTask} tasks={displayTasks} />
      </div>
    </div>
  );




}

export default App;
export default App;