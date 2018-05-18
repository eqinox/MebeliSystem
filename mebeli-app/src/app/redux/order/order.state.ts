import { Order } from '../../models/order';

export interface IOrderState {
  orders: Order[];
  singleOrder: Order;
}
