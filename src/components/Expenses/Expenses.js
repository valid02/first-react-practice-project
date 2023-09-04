import Chart from '../Chart/Chart';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  return ( 
    <Card className='expenses'>
      <Chart />
      {props.items.map(expense => (
        <ExpenseItem 
          key={expense.id}
          title= {expense.title}
          amount= {expense.amount}
          date= {expense.date}
        />
      ))}
    </Card>
   );
}
 
export default Expenses;