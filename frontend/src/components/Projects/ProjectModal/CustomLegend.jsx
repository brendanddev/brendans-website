
/**
 * @file CustomLegend.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Custom legend component for the recharts pie chart
 */


const CustomLegend = ({ payload }) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 mt-4" aria-label="Chart legend" role="list">
            {payload.map((entry, index) => (
                <div key={index} className="flex items-center gap-2" role="listitem">
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                        aria-label={`Legend color for ${entry.value}`}
                    />
                    <span className="text-sm text-gray-300">{entry.value}</span>
                </div>
            ))}
        </div>
    );
};

export default CustomLegend;
