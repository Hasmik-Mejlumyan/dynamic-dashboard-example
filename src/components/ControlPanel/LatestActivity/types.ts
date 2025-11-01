export type StatusTransactionType = 'confirm' | 'paymentExpired' | 'waitingPayment';
export type OrderStatusType = 'shipped' | 'delivered' | 'cancel';

export interface ITransaction {
  image: string;
  name: string;
  status: StatusTransactionType;
  amount: number;
  date: string;
}

export interface IOrder {
  orderNumber: number;
  image: string;
  name: string;
  status: OrderStatusType;
  amount: number;
  date: string;
}

export interface ILatestTransactionsProps {
  transactions: ITransaction[];
}

export interface ILatestOrdersProps {
  orders: IOrder[];
}
