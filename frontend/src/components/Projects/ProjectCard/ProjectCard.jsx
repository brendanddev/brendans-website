
/**
 * @file ProjectCard.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Main ProjectCard component that conditionally renders GridCard or ListCard based on viewMode
 */

import GridCard from "./GridCard";
import ListCard from "./ListCard";

const ProjectCard = ({ 
    project, 
    onClick, 
    viewMode = "grid",
}) => {
    return viewMode === "list" 
        ? <ListCard project={project} onClick={onClick} />
        : <GridCard project={project} onClick={onClick} />;
};

export default ProjectCard; 