
/**
 * @file ProjectStats.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Project stats component with tech count, features count, github stars, and status
 */

import { projectStatus } from "../../../data/projectMeta";
import StatusBadge from "../ProjectCard/StatusBadge";

const ProjectStats = ({ project }) => {
    const status = projectStatus[project.status];

    return (
        <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
            
            {/* Section title */}
            <h4 className="text-lg font-semibold text-white mb-4">Project Statistics</h4>
            {/* Responsive grid for stats */}
            <div className="grid grid-cols-2 gap-4" aria-label="Project statistics" role="list">
                
                {/* Technology count */}
                <div className="text-center" role="listitem">
                    <div className="text-2xl font-bold text-[#00ff00]">
                        {project.icons?.length || 0}
                    </div>
                    <div className="text-sm text-gray-400">Technologies</div>
                </div>
                
                {/* Features count */}
                <div className="text-center" role="listitem">
                    <div className="text-2xl font-bold text-[#00ff00]">
                        {project.features?.length || 0}
                    </div>
                    <div className="text-sm text-gray-400">Features</div>
                </div>

                {/* Displau number of gh stars if any */}
                <div className="text-center">
                    <div className="text-2xl font-bold text-[#00ff00]">
                        {project.githubStars || 0}
                    </div>
                    <div className="text-sm text-gray-400">Github Stars</div>
                </div>
                {/* Project status */}
                <div className="text-center" role="listitem">
                    <StatusBadge status={project.status} />
                    <div className="text-sm text-gray-400">Status</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectStats;

