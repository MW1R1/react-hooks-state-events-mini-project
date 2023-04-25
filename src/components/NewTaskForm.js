import React,{useState} from "react";
import React, {useState} from "react";

function NewTaskForm(props) {
  // console.log(props.categories)
  const { categories, onTaskFormSubmit } = props;
  const [text, setName] = useState({});
  const [category, setCategory] = useState("All");
function NewTaskForm({onTaskFormSubmit, categories}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(category, text);

    // setName("");
  }
  const displayCategories = categories.map((item) => (
    <option key={item}>{item}</option>
  ))

  function handleChange(event){
    let txt =  event.target.id


    setName(prevObj => {return {...prevObj,[txt]:event.target.value}})  
  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit({text, category});
    setText("");
  }

  // function handleChanging(event){
  //   let cat = event.target.id
  //   setCategory(prevObj => {return {...prevObj,[cat]:event.target.value}})  

  // }
  const displayCategory = categories.map(category => {
    // console.log(category)
    return <option key={category}>{category}</option>
  })



  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} id = "text" onChange={handleChange} />
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} id = "category">
          {/* render <option> elements for each category here */}
          {displayCategory}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {displayCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}
export default NewTaskForm;