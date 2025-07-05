
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
        <div className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${statusInfo.color} text-white`}>
            {statusInfo.name}
        </div>
    );
};

export default StatusBadge; 