import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterAmount, setEnterAmount] = useState('');
  const [enterDate, setEnterDate] = useState('');

  const titleChangeHandler = event => {
    setEnterTitle(event.target.value);
  }

  const amountChangeHandler = event => {
    setEnterAmount(event.target.value);
  }

  const dateChangeHandler = event => {
    setEnterDate(event.target.value);
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button>Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;