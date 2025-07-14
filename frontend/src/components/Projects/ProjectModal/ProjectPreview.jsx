
/**
 * @file ProjectPreview.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Project preview component with placeholder content
 */

import { FaCode } from "react-icons/fa";


const ProjectPreview = ({ project }) => {
    return (
        <div className="relative">
            
            {/* Preview container with placeholder visuals */}
            <div className="bg-slate-700/50 rounded-xl p-8 h-64 flex items-center justify-center border border-slate-600/30">
                <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#00ff00]/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaCode size={32} className="text-[#00ff00]" />
                    </div>
                    <p className="text-gray-400 font-medium">Project Preview</p>
                    <p className="text-gray-500 text-sm mt-1">Interactive showcase coming soon</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;

