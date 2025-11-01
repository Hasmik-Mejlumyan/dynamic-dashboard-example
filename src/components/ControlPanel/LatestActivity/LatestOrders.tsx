import type { FC } from 'react';

import Card from '../../UI/Card/Card.tsx';
import Button from '../../UI/Button/Button.tsx';

import type { ILatestOrdersProps, OrderStatusType } from './types.ts';

const LatestOrders: FC<ILatestOrdersProps> = ({ orders }) => {
  const statusLabelsMapping: Record<OrderStatusType, string> = {
    shipped: 'Shipped',
    delivered: 'Delivered',
    cancel: 'Cancel',
  };
  const statusColorClassesMapping: Record<OrderStatusType, string> = {
    shipped: 'bg-orange-400',
    delivered: 'bg-green-500',
    cancel: 'bg-red-500',
  };

  const latestOrdersProps = (
    orders.map((order) => {
      return (
        <tr key={order.orderNumber} className="border-b border-border-color">
          <td className="p-3 text-card-text-color text-[0.8125rem]">
            <span>{order.orderNumber}</span>
          </td>
          <td className="p-3 text-card-text-color text-[0.8125rem] min-w-64">
            <div className="flex items-center">
              <div className="size-8 rounded-full mr-2">
                <img className="size-full block rounded-full" src={order.image} alt={order.name}/>
              </div>
              <span className="flex-1">{order.name}</span>
            </div>
          </td>
          <td className="p-3 text-card-text-color text-[0.8125rem]">
            <span className={`text-white py-0.5 px-1.5 rounded-2xl text-[0.6rem] ${statusColorClassesMapping[order.status]}`}>
              {statusLabelsMapping[order.status]}
            </span>
          </td>
          <td className="p-3 text-card-text-color text-[0.8125rem]">
            <span>${order.amount}</span>
          </td>
          <td className="p-3 text-card-text-color text-[0.8125rem]">
            <span>{order.date}</span>
          </td>
          <td className="p-3 text-card-text-color text-[0.8125rem]">
            <Button variant="secondary" className="text-xs">Edit</Button>
          </td>
        </tr>
      );
    })
  );
  return (
    <Card title="Latest Transactions">
      <div className="overflow-auto w-full">
        <table>
          <tbody>
            {latestOrdersProps}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default LatestOrders;
