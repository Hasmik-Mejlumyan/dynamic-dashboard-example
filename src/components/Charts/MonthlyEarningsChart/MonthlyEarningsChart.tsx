import Card from '../../UI/Card/Card.tsx';
import MonthlyEarningsChartItem from './MonthlyEarningsChartItem.tsx';
import ChartsOverallData from '../ChartsOverallData.tsx';

import chartsOverallData from '../../../mock/chartsOverallData.json';

const MonthlyEarningsChart = () => {
  return (
    <Card title="Monthly Earnings">
      <ChartsOverallData data={chartsOverallData.monthlyEarnings} />
      <MonthlyEarningsChartItem />
    </Card>
  );
};

export default MonthlyEarningsChart;
