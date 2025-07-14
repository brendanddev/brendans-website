
/**
 * @file FeatureTags.jsx
 * @author Brendan Dileo, July 2025
 * 
 * 
 * A component for displaying a list of feature tags inside the project cards
 */

const FeatureTags = ({ features }) => {
    // If no features, render nothing
    if (!features || features.length === 0) return null;
    return (
        <div>

            {/* Section title */}
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Key Features
            </h4>
            {/* Feature tags */}
            <div className="flex flex-wrap gap-2" aria-label="Feature tags" role="list">
                
                {/* Display first 2 features */}
                {features.slice(0, 2).map((feature, i) => (
                    <span
                        key={i}
                        className="
                            text-xs bg-slate-700/40 text-slate-300 
                            px-3 py-1.5 rounded-full font-medium
                            border border-slate-600/30
                            backdrop-blur-sm
                        "
                        role="listitem"
                    >
                        {feature}
                    </span>
                ))}
                {/* Show count of remaining features if more than 2 */}
                {features.length > 2 && (
                    <span
                        className="
                            text-xs bg-slate-600/40 text-slate-400 
                            px-3 py-1.5 rounded-full font-medium
                            border border-slate-500/30
                            backdrop-blur-sm
                        "
                        role="listitem"
                    >
                        +{features.length - 2} more
                    </span>
                )}
            </div>
        </div>
    );
};

export default FeatureTags; 