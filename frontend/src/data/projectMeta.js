
/**
 * @file projectMeta.js
 * @author Brendan Dileo, July 2025
 * 
 * Basic metadata for my projects
 */

import { FaCheckCircle, FaHourglassHalf, FaFlask } from "react-icons/fa";

// Projects status
export const projectStatus = {

  Complete: {
    name: 'Complete',
    color: 'from-blue-400 to-blue-600',
    icon: FaCheckCircle
  },

  'In Progress': {
    name: 'In Progress',
    color: 'from-yellow-400 to-yellow-600',
    icon: FaHourglassHalf
  },
  
  Prototype: {
    name: 'Prototype',
    color: 'from-gray-400 to-gray-600',
    icon: FaFlask
  }

}; 