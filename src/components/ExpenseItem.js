import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // برای تاریخ فارسی fa-IR 
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.getFullYear();
  // expenseDate.toLocaleString('en-US', {year: 'numeric'})
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});

  return ( 
    <div className='expense-item'>
      <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
      </div>
      <div className='expense-item__description'>
        <h2 className='expense-item__title'>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
   );
}
 
export default ExpenseItem;