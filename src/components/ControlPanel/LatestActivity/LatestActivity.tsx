import LatestTransactions from './LatestTransactions.tsx';
import LatestOrders from './LatestOrders.tsx';

import latestActivity from '../../../mock/latestActivity.json';

import type { IOrder, ITransaction } from './types.ts';

const LatestActivity = () => {
  return (
    <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
      <LatestTransactions transactions={latestActivity.latestTransactions as ITransaction[]} />
      <LatestOrders orders={latestActivity.latestOrders as IOrder[]} />
    </div>
  );
};

export default LatestActivity;

