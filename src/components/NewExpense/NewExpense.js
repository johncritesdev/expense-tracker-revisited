import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onSaveExpense(expenseData);
    setIsEditing(false);
  };

  const startExpenseHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startExpenseHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={expenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
}

export default NewExpense;