import './ExpenseDate.css';

const ExpenseDate = props => {
  // برای تاریخ فارسی fa-IR 
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.getFullYear();
  // expenseDate.toLocaleString('en-US', {year: 'numeric'})
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
