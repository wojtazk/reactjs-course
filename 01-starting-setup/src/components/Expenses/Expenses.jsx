import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [pickedFilter, setPickedFilter] = useState('2020');

  const pickedFilterHandler = (selectedYear) => {
    setPickedFilter(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === +pickedFilter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={pickedFilter}
        onPickedFilter={pickedFilterHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
