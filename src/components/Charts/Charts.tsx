import MonthlyEarningsPieChart from './MonthlyEarningsPieChart/MonthlyEarningsPieChart.tsx';
import EmailSentChart from './EmailSentChart/EmailSentChart.tsx';
import MonthlyEarningsChart from './MonthlyEarningsChart/MonthlyEarningsChart.tsx';

const Charts = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <MonthlyEarningsPieChart />
      <EmailSentChart />
      <MonthlyEarningsChart />
    </div>
  );
};

export default Charts;
