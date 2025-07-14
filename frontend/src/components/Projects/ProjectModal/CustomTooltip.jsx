
/**
 * @file CustomTooltip.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Custom tooltip component for the recharts pie chart
 */

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0];
        return (
            <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-lg" aria-live="polite">
                <p className="text-white font-medium">{data.name}</p>
                <p className="text-[#00ff00] font-bold">{data.value}%</p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;
