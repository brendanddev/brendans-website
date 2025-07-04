
/**
 * @file RelatedProjects.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Related projects component with navigation functionality
 */

import { FaArrowRight } from "react-icons/fa";
import projectData from "../../../data/projectData";


const RelatedProjects = ({ project, onProjectSelect }) => {

    // Filter out the current project by title and limit to 3 related projects
    const relatedProjects = projectData
        .filter(p => p.title !== project.title)
        .slice(0, 3);

    return (
        <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
            <h4 className="text-lg font-semibold text-white mb-4">Related Projects</h4>
            <div className="space-y-2">

                {/* Map through the related projects and render each one */}
                {relatedProjects.map((relatedProject) => (
                    <div 
                        key={relatedProject.title}
                        className="flex items-center justify-between p-3 bg-slate-600/30 rounded-lg hover:bg-slate-600/50 transition-colors cursor-pointer"
                        onClick={() => onProjectSelect(relatedProject)}
                    >
                        <div>
                            <div className="font-medium text-white">{relatedProject.title}</div>
                            <div className="text-sm text-gray-400">
                                {relatedProject.desc?.substring(0, 50)}...
                            </div>
                        </div>
                        <FaArrowRight size={16} className="text-gray-400" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedProjects;
