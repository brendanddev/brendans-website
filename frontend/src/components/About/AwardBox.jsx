
/**
 * @file AwardBox.jsx
 * @author Brendan Dileo
 * 
 * Reusable component for displaying achievements and awards
*/

const AwardBox = ({ title, items }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-slate-800/50 transition-transform duration-300 hover:scale-105 hover:border-green-400 hover:shadow-[0_0_15px_rgba(50,205,50,0.8)] border-slate-700">
      <h3 className="text-xl font-semibold text-green-400 mb-4">{title}</h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AwardBox; 