
/**
 * @file SkillSection.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A reusable component for the skills section on the about page that
 * displays a section of my skills with icons
*/

const SkillSection = ({ title, icons, className = "" }) => {
  return (

    // Main container for the section
    <div className={`text-center p-4 md:p-6 border border-green-400 rounded-lg shadow-lg bg-slate-800 transition-transform transform hover:scale-105 ${className}`}>
    
      {/* Sections title */}
      <h3 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">{title}</h3>
      
      {/* Container for the icons */}
      <div className="flex justify-center flex-wrap gap-4 md:gap-6">
    
        {/* Map through each of the icons and render them */}
        {icons.map((icon, index) => (
          // Each of the icons, with a unique key and their icon defined by their class name
          <i 
            key={index}
            className={`${icon.className} text-4xl md:text-5xl transition-colors`}
            // Add handlers to change icon color on hover
            onMouseEnter={(e) => { e.target.style.color = icon.hoverColor; }}
            onMouseLeave={(e) => { e.target.style.color = ''; }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSection; 