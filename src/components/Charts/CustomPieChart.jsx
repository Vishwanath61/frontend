import React from 'react'
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts'
import CustomTooltip from './CustomTooltip'
import CustomLegend from './CustomLegend'

const CustomPieChart = ({data, label, totalAmount, colors, showTextAnchor}) => {
  console.log("CustomPieChart Props:", { data, label, totalAmount, colors, showTextAnchor });
  
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return <ResponsiveContainer width="100%" height={380}>
    <PieChart>
        <Pie 
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={100}
            labelLine={false}
        >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
        </Pie>
        <Tooltip content={CustomTooltip} />
        <Legend content={CustomLegend} />
        {showTextAnchor && (
            <g>
                <text 
                    x="50%" 
                    y="50%" 
                    dy="-20"
                    textAnchor="middle" 
                    dominantBaseline="middle"
                    fill="#666666"
                    fontSize={14}
                    fontFamily="inherit"
                >
                    {label}
                </text>
                <text 
                    x="50%" 
                    y="50%" 
                    dy="20"
                    textAnchor="middle" 
                    dominantBaseline="middle"
                    fill="#333333"
                    fontSize={24}
                    fontWeight={600}
                    fontFamily="inherit"
                >
                    {totalAmount}
                </text>
            </g>
        )}
    </PieChart>
  </ResponsiveContainer>
}

export default CustomPieChart
