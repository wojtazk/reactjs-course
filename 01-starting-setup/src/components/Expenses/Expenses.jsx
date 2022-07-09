import { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [pickedFilter, setPickedFilter] = useState('2022');

  const pickedFilterHandler = (selectedYear) => {
    setPickedFilter(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={pickedFilter}
        onPickedFilter={pickedFilterHandler}
      />
      {props.data.map((ex) => {
        return (
          <ExpenseItem
            key={ex.id}
            title={ex.title}
            date={ex.date}
            amount={ex.amount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
