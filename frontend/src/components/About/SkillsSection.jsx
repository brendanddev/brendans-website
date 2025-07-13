
/**
 * @file SkillsSection.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A reusable component for the skills section on the about page that
 * displays a section of my skills with icons
*/

import { motion } from "framer-motion";


const SkillSection = ({ 
  title, 
  icons, 
  icon: IconComponent,
  color = "text-green-400",
  bgColor = "bg-green-400/10",
  borderColor = "border-green-400/20",
  className = "" 
}) => {
  return (

    // Main container for the skills section
    <motion.div
      className={`group text-center p-4 sm:p-6 border rounded-xl shadow-lg bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm transition-all duration-500 hover:scale-105 ${borderColor} ${className}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >

      {/* Header area with optional category icon and title*/}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        
        {/* Conditional rendering of the icon if provided */}
        {IconComponent && (
          <div className={`w-8 h-8 sm:w-10 sm:h-10 ${bgColor} rounded-lg flex items-center justify-center`}>
            <IconComponent size={16} className="sm:w-5 sm:h-5 ${color}" />
          </div>
        )}

        <h3 className={`text-lg sm:text-xl font-semibold ${color}`}>{title}</h3>
      </div>
      
      {/* Icons grid */}
      <div className="flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-6">
        {/* Map each of the icons */}
        {icons.map((icon, index) => (
          // Wraps each icon in a motion component for animations
          <motion.i 
            key={index}
            className={`${icon.className} text-3xl sm:text-4xl md:text-5xl transition-all duration-300 cursor-pointer`}
            // Triggers hover effect based on icons defined hover color
            onMouseEnter={(e) => {
              e.target.style.color = icon.hoverColor;
            }}
            // Resets color after hover
            onMouseLeave={(e) => {
              e.target.style.color = '';
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillSection; 