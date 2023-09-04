import './ChartBar.css';

const ChartBar = () => {
  let barFillHeight = '43%';

  return ( 
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div 
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">Jan</div>
    </div>
   );
}
 
export default ChartBar;