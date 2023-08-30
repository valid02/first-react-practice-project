import './ExpenseItem.css';

const ExpenseItem = () => {
  const expenseDate = new Date(2002, 6, 29);
  const expenseTitle = 'New TV';
  const expenseAmount = 799.45;

  return ( 
    <div className='expense-item'>
      <div className='expense-date'>
        {/* برای تاریخ فارسی fa-IR */}
        <div className='expense-date__month'>{expenseDate.toLocaleString('en-US', {month: 'long'})}</div>
        <div className='expense-date__year'>{expenseDate.getFullYear()}</div>
        {/* expenseDate.toLocaleString('en-US', {year: 'numeric'}) */}
        <div className='expense-date__day'>{expenseDate.toLocaleString('en-US', {day: '2-digit'})}</div>
      </div>
      <div className='expense-item__description'>
        <h2 className='expense-item__title'>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
   );
}
 
export default ExpenseItem;