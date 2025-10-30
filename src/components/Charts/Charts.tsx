import MonthlyEarningsPieChart from './MonthlyEarningsPieChart.tsx';
import EmailSentChart from './EmailSentChart.tsx';
import MonthlyEarningsChart from './MonthlyEarningsChart.tsx';

const Charts = () => {
  return (
    <div>
      <MonthlyEarningsPieChart />
      <EmailSentChart />
      <MonthlyEarningsChart />
    </div>
  );
};

export default Charts;
