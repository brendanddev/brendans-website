
/**
 * @file FeatureTags.jsx
 * @author Brendan Dileo, July 2025
 * 
 * 
 * A component for displaying a list of feature tags inside the project cards
 */

const FeatureTags = ({ features, compact }) => {
    // If no features, render nothing
    if (!features || features.length === 0) return null;
    return (
        <div>
            {/* Section title */}
            <h4 className={`text-xs font-semibold text-slate-400 uppercase tracking-wider ${compact ? 'mb-1' : 'mb-3'}`}>
                Key Features
            </h4>
            {/* Feature tags */}
            <div className={`flex flex-wrap ${compact ? 'gap-1' : 'gap-2'}`} aria-label="Feature tags" role="list">
                {/* Display first 2 features */}
                {features.slice(0, 2).map((feature, i) => (
                    <span
                        key={i}
                        className={`
                            text-xs bg-slate-700/40 text-slate-300 
                            ${compact ? 'px-2 py-1' : 'px-3 py-1.5'}
                            rounded-full font-medium
                            border border-slate-600/30
                            backdrop-blur-sm
                        `}
                        role="listitem"
                    >
                        {feature}
                    </span>
                ))}
                {/* Show count of remaining features if more than 2 */}
                {features.length > 2 && (
                    <span
                        className={`
                            text-xs bg-slate-600/40 text-slate-400 
                            ${compact ? 'px-2 py-1' : 'px-3 py-1.5'}
                            rounded-full font-medium
                            border border-slate-500/30
                            backdrop-blur-sm
                        `}
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