
/**
 * @file ProjectCount.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A simple component that displays the number of projects
 * currently listed on the projects page
 *
 */

const ProjectCount = ({ projectCount }) => (
  
  <div className="flex items-center gap-2 text-sm text-slate-400">
    <span className="font-semibold text-slate-300">
      {projectCount} {projectCount === 1 ? 'project' : 'projects'}
    </span>
  </div>
  
);

export default ProjectCount; 