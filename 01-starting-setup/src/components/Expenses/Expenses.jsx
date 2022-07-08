import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
  const expenseItems = props.data.map((ex) => (
    <ExpenseItem
      key={ex.id}
      title={ex.title}
      date={ex.date}
      amount={ex.amount}
    />
  ));

  return <Card className="expenses">{expenseItems}</Card>;
};

export default Expenses;
