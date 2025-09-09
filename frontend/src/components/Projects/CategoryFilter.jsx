
/**
 * @file CategoryFilter.jsx
 * @author Brendan Dileo, June 2025
 * 
 * Renders the category filter buttons for the Projects page.
 */


const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="mb-8">
      <div className="bg-black/50 border border-gray-700 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#00ff00] font-mono text-lg">$</span>
          <h2 className="text-[#00ff00] font-mono text-xl font-bold">filter_projects</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => onSelectCategory(category.key)}
              className={`px-4 py-2 rounded border font-mono text-sm transition-colors duration-300 ${
                selectedCategory === category.key
                  ? 'bg-[#00ff00] text-black border-[#00ff00]'
                  : 'bg-transparent text-[#00ff00] border-gray-600 hover:border-[#00ff00] hover:bg-[#00ff00]/10'
              }`}
            >
              {category.icon} {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;