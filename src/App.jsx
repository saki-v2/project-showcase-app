import { useState } from "react";
import Header from "./components/Header";
import ProjectBox from "./components/ProjectBox";
import ProjectForm from "./components/ProjectForm";

export default function App(){
  const[projects, setProjects] = useState([])
  const[query, setQuery] = useState("")

  function addProject(project) {
    setProjects([...projects, {id: Date.now(), ...project}])
  }

  function deleteProject(id) {
    setProjects(projects.filter(function (p) {
      return p.id !== id;
    }));
  }

  const filtered = projects.filter(function(p){
    return p.title.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <div className="main-body">
      <Header title="My Personal Project Showcse App" />
      <ProjectForm onAddProject = {addProject} />
      <ProjectBox projects={filtered} query={query} onQueryChange={setQuery} onDeleteProject={deleteProject} />
    </div>
  )
}