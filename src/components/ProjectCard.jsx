import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectCard(props) {
  return (
    <div className="card">
      <div className="card-icon">
        <GitHubIcon fontSize="large" />
      </div>
      <div className="card-text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <button className="delete-btn" onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
}