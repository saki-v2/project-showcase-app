import ProjectCard from "./ProjectCard";

export default function ProjectList (props){


    return(

        <div className="list">
            {props.projects.map(function (p) {
                return(
                    <ProjectCard key={p.id} id={p.id} title={p.title} description={p.description} onDelete={props.onDeleteProject} />
                )
            }
            )   
            }            
        </div>
    )
}