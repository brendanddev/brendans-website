
/**
 * @file ProjectAbout.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Project about section component with description
 */

import { FaCode } from "react-icons/fa";

const ProjectAbout = ({ project }) => {
    return (
        <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <FaCode size={20} />
                About This Project
            </h3>
            <p className="text-gray-300 leading-relaxed">
                {project.longDesc || project.desc}
            </p>
        </div>
    );
};

export default ProjectAbout;

