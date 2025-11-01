import Card from '../../UI/Card/Card.tsx';
import MonthlyEarningsPieChartItem from './MonthlyEarningsPieChartItem.tsx';
import ChartsOverallData from '../ChartsOverallData.tsx';

import chartsOverallData from '../../../mock/chartsOverallData.json';

const MonthlyEarningsPieChart = () => {
  return (
    <Card title="Monthly Earnings">
      <ChartsOverallData data={chartsOverallData.monthlyEarningsPie} />
      <MonthlyEarningsPieChartItem />
    </Card>
  );
}

export default MonthlyEarningsPieChart;
