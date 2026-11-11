import { useState } from "react";

export default function ProjectForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddProject({ title: title, description: description });
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Project</h3>
      <label>Title</label>
      <input type="text" value={title} placeholder="Enter project name..." onChange={(e) => setTitle(e.target.value)}/>
      <label>Description</label>
      <textarea name="description" id="description" value={description} placeholder="Describe your project..." onChange={(e) => setDescription(e.target.value)}></textarea>
      <button className="submit-btn" type="submit">Add</button>
    </form>
  );
}