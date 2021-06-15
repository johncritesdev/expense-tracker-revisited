import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
  let expensesMessage = <p>There are no expenses for this year.</p>

  if (props.items.length > 0) {
    expensesMessage = props.items.map(expense => <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />)
  };

  return (
    <ul className="expenses-list">

    </ul>
  );
};

export default ExpensesList;