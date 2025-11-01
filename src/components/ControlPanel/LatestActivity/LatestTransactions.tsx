import type { FC } from 'react';

import Card from '../../UI/Card/Card.tsx';
import Button from '../../UI/Button/Button.tsx';

import type { ILatestTransactionsProps, StatusTransactionType } from './types.ts';

const LatestTransactions: FC<ILatestTransactionsProps> = ({ transactions }) => {
  const statusLabelsMapping: Record<StatusTransactionType, string> = {
    confirm: 'Confirm',
    paymentExpired: 'Payment Expired',
    waitingPayment: 'Waiting Payment',
  };
  const statusColorClassesMapping: Record<StatusTransactionType, string> = {
    confirm: 'bg-green-500',
    paymentExpired: 'bg-red-500',
    waitingPayment: 'bg-orange-400',
  };

  const latestTransactionsContent = (
    transactions.map((transaction) => (
      <tr key={transaction.name} className="border-b border-border-color">
        <td className="p-3 text-card-text-color text-[0.8125rem]">
          <div className="size-8 rounded-full">
            <img className="size-full block rounded-full" src={transaction.image} alt={transaction.name}/>
          </div>
        </td>
        <td className="p-3 text-card-text-color text-[0.8125rem]">
          <span>{transaction.name}</span>
        </td>
        <td className="p-3 text-card-text-color text-[0.8125rem]">
          <div className="flex items-center gap-1">
            <div className={`size-3 rounded-full ${statusColorClassesMapping[transaction.status]}`} />
            <span>
              {statusLabelsMapping[transaction.status]}
            </span>
          </div>
        </td>
        <td className="p-3 text-card-text-color text-[0.8125rem]">
          <div className="flex flex-col items-start text-sm">
            <span>${transaction.amount}</span>
            <span className="text-card-text-color/80">Amount</span>
          </div>
        </td>
        <td className="p-3 text-card-text-color text-[0.8125rem]">
          <div className="flex flex-col items-start text-sm">
            <span>{transaction.date}</span>
            <span className="text-card-text-color/80">Date</span>
          </div>
        </td>
        <td className="p-3 text-card-text-color text-[0.8125rem]">
          <Button variant="secondary" className="text-xs">Edit</Button>
        </td>
      </tr>
    ))
  );

  return (
    <Card title="Latest Transactions">
      <div>
        <table className="w-full">
          <tbody>
            {latestTransactionsContent}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default LatestTransactions;
