import SearchBar from "./SearchBar";
import ProjectList from "./ProjectList";


export default function ProjectBox (props){


    return(
        <section>
            <SearchBar query={props.query} onQueryChange={props.onQueryChange} />
            <ProjectList projects={props.projects} onDeleteProject={props.onDeleteProject} />
                    
        </section>
    )
}