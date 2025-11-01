import LatestTransactions from './LatestTransactions.tsx';
import LatestOrders from './LatestOrders.tsx';

import latestActivity from '../../../mock/latestActivity.json';

const LatestActivity = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <LatestTransactions transactions={latestActivity.latestTransactions} />
      <LatestOrders />
    </div>
  );
};

export default LatestActivity;

