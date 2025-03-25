import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from 'moment'

const ExpenseTransactions = ({transactions, onSeeMore}) => {
  const validTransactions = Array.isArray(transactions) ? transactions : [];

  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Expenses</h5>

            <button className='card-btn' onClick={onSeeMore}>
                See All <LuArrowRight className='text-base' />
            </button>
        </div>

        <div className='mt-6'>
            {validTransactions.length > 0 ? (
                validTransactions.slice(0, 4).map((expense) => (
                    <TransactionInfoCard
                        key={expense._id}
                        title={expense.category || 'Uncategorized'}
                        icon={expense.icon}
                        date={expense.date ? moment(expense.date).format("Do MMM YYYY") : '-'}
                        amount={expense.amount || 0}
                        type="expense"
                        hideDeleteBtn
                    />
                ))
            ) : (
                <div className="text-gray-500 text-center py-4">No recent expenses</div>
            )}
        </div>
    </div>
  )
}

export default ExpenseTransactions
