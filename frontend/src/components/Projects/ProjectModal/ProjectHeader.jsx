
/**
 * @file ProjectHeader.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Project modal header component with title, status, and controls
 */

import { FaPlay, FaPause } from "react-icons/fa";
import { X } from "lucide-react";
import { projectStatus } from "../../../data/projectMeta";

const ProjectHeader = ({ 
    project, 
    isAutoPlaying, 
    onToggleAutoPlay, 
    onClose 
}) => {
    const status = projectStatus[project.status];

    return (
        <div className="sticky top-0 z-10 bg-slate-800/95 backdrop-blur-sm border-b border-slate-600/50 p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
                
                {/* Project title and status */}
                <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold text-[#00ff00]">
                        {project.title}
                    </h2>
                    <div className="flex items-center gap-2">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${status.color} text-white`}>
                            {status.name}
                        </div>
                    </div>
                </div>

                {/* Control buttons */}
                <div className="flex items-center gap-2">
                    
                    {/* Auto-play toggle button */}
                    <button
                        onClick={onToggleAutoPlay}
                        className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-gray-300 hover:text-[#00ff00]"
                        title={isAutoPlaying ? "Pause Auto-play" : "Start Auto-play"}
                    >
                        {isAutoPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
                    </button>

                    {/* Close modal button */}
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;
