
/**
 * @file SkillSection.jsx
 * @author Brendan Dileo
 * 
 * Reusable component for displaying skill sections with icons
*/

const SkillSection = ({ title, icons, className = "" }) => {
  return (
    <div className={`text-center p-4 md:p-6 border border-green-400 rounded-lg shadow-lg bg-slate-800 transition-transform transform hover:scale-105 ${className}`}>
      <h3 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">{title}</h3>
      <div className="flex justify-center flex-wrap gap-4 md:gap-6">
        {icons.map((icon, index) => (
          <i 
            key={index}
            className={`${icon.className} text-4xl md:text-5xl hover:text-[${icon.hoverColor}] transition-colors`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSection; 