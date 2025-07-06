
/**
 * @file StatusBadge.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A reusable component for displaying the status of a project
 */

import { projectStatus } from "../../../data/projectMeta";

const StatusBadge = ({ status }) => {
    const statusInfo = projectStatus[status];
    
    return (
        <div className={`
            inline-flex items-center px-3 py-1.5 rounded-full 
            text-xs font-semibold tracking-wide
            bg-gradient-to-r ${statusInfo.color} 
            text-white shadow-sm
            border border-white/10
            backdrop-blur-sm
        `}>
            {statusInfo.name}
        </div>
    );
};

export default StatusBadge; 