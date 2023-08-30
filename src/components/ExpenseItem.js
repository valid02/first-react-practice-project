import './ExpenseItem.css';

const ExpenseItem = (props) => {

  return ( 
    <div className='expense-item'>
      <div className='expense-date'>
        {/* برای تاریخ فارسی fa-IR */}
        <div className='expense-date__month'>{props.date.toLocaleString('en-US', {month: 'long'})}</div>
        <div className='expense-date__year'>{props.date.getFullYear()}</div>
        {/* expenseDate.toLocaleString('en-US', {year: 'numeric'}) */}
        <div className='expense-date__day'>{props.date.toLocaleString('en-US', {day: '2-digit'})}</div>
      </div>
      <div className='expense-item__description'>
        <h2 className='expense-item__title'>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
   );
}
 
export default ExpenseItem;