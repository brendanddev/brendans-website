
/**
 * @file EducationSection.jsx
 * @author Brendan Dileo, September 2025
 *
 * Displays education information in a terminal-style card on the About page.
 */


import { motion } from 'framer-motion';

const EducationSection = ({ data, itemVariants }) => {
  return (
    <motion.div variants={itemVariants} className="bg-black/50 border border-gray-700 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#00ff00] font-mono text-lg">$</span>
        <h2 className="text-[#00ff00] font-mono text-xl font-bold">education</h2>
      </div>

      <div className="space-y-3 text-[#00ff00] font-mono">
        <p><span className="text-gray-400">&gt;</span> <span className="font-bold">Degree:</span> {data.degree}</p>
        <p><span className="text-gray-400">&gt;</span> <span className="font-bold">School:</span> {data.school}</p>
        <p><span className="text-gray-400">&gt;</span> <span className="font-bold">Graduation:</span> {data.graduation}</p>

        <div className="ml-4">
          <p className="text-gray-400 mb-2">Achievements:</p>

          {data.achievements.average && (
            <p className="mb-2">
              <span className="text-gray-500">└─</span> Average: {data.achievements.average}
            </p>
          )}

          {data.achievements.honors && data.achievements.honors.length > 0 && (
            <div className="mb-3">
              <p className="mb-2">
                <span className="text-gray-500">└─</span><span className="text-gray-400"> Honors:</span>
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 ml-4">
                {data.achievements.honors.map((honor, index) => (
                  <p key={`honor-${index}`} className="text-sm">
                    <span className="text-gray-500">└───</span> {honor}
                  </p>
                ))}
              </div>
            </div>
          )}

          {data.achievements.courses && data.achievements.courses.length > 0 && (
            <div>
              <p className="mb-2">
                <span className="text-gray-500">└─</span><span className="text-gray-400"> Courses:</span>
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 ml-4">
                {data.achievements.courses.map((courseObj, index) => (
                  <p key={`course-${index}`} className="text-sm">
                    <span className="text-gray-500">└──</span> {courseObj.course}: {courseObj.grade}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationSection;