import Card from '../../UI/Card/Card.tsx';
import EmailSentChartItem from './EmailSentChartItem.tsx';
import ChartsOverallData from '../ChartsOverallData.tsx';

import chartsOverallData from '../../../mock/chartsOverallData.json';

const EmailSentChart = () => {
  return (
    <Card title="Email Sent" className="col-span-2">
      <ChartsOverallData data={chartsOverallData.emailSent} />
      <EmailSentChartItem />
    </Card>
  );
};

export default EmailSentChart;
