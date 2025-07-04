/**
 * @file TechBreakdownChart.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Technology breakdown chart component using Recharts pie chart
 */

import { motion } from "framer-motion";
import { FaChartPie } from "react-icons/fa";
import { 
    PieChart, 
    Pie, 
    Cell, 
    ResponsiveContainer, 
    Tooltip, 
    Legend 
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";

/**
 * Technology Breakdown Chart Component
 * 
 * @param {Object} props - Component props
 * @param {Array} props.techBreakdown - Array of technology breakdown data
 * @returns {JSX.Element|null} Chart component or null if no data
 */
const TechBreakdownChart = ({ techBreakdown }) => {
    if (!techBreakdown || techBreakdown.length === 0) {
        return null;
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30"
        >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaChartPie size={18} />
                Technology Breakdown
            </h4>
            
            {/* Pie Chart Container */}
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={techBreakdown}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                            animationDuration={1000}
                            animationBegin={500}
                        >
                            {techBreakdown.map((entry, index) => (
                                <Cell 
                                    key={`cell-${index}`} 
                                    fill={entry.color}
                                    stroke="none"
                                />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend content={<CustomLegend />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            
            {/* Additional breakdown info */}
            <div className="mt-4 pt-4 border-t border-slate-600/30">
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                        <div className="text-lg font-bold text-[#00ff00]">
                            {techBreakdown.length}
                        </div>
                        <div className="text-sm text-gray-400">Technologies</div>
                    </div>
                    <div>
                        <div className="text-lg font-bold text-[#00ff00]">
                            {techBreakdown.reduce((sum, tech) => sum + tech.value, 0)}%
                        </div>
                        <div className="text-sm text-gray-400">Total Usage</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TechBreakdownChart; 