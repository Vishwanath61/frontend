import React from 'react'
import CustomPieChart from '../Charts/CustomPieChart';
const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

const FinanceOverview = ({totalBalance, totalIncome, totalExpenses}) => {
    // Ensure all values are numbers and handle undefined/null
    const balance = typeof totalBalance === 'number' ? totalBalance : 0;
    const income = typeof totalIncome === 'number' ? totalIncome : 0;
    const expenses = typeof totalExpenses === 'number' ? totalExpenses : 0;
    
    const balanceData = [
        {name: "Total Balance", amount: Math.abs(balance)},
        {name: "Total Expenses", amount: Math.abs(expenses)},
        {name: "Total Income", amount: Math.abs(income)},
    ];
    
    return (
        <div className='card'>
            <div className='flex items-center justify-between'>
                <h5 className='text-lg'>Financial Overview</h5>
            </div>

            <CustomPieChart 
                data={balanceData}
                label="Total Balance"
                totalAmount={`₹${Math.abs(balance).toLocaleString()}`}
                colors={COLORS}
                showTextAnchor={true}
            />
        </div>
    );
}

export default FinanceOverview
