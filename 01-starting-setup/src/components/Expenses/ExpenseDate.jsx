import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const [month, day, year] = [
    props.date.toLocaleString(navigator.language, { month: 'long' }),
    props.date.toLocaleString(navigator.language, { day: '2-digit' }),
    props.date.getFullYear(),
  ];

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
