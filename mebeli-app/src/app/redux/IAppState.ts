import { IOrderState } from './order/order.state';
import { IUserState } from './user/user.state';

export interface IAppState {
  orders: IOrderState;
  users: IUserState;
}
