import { combineReducers } from 'redux';
import { orderReducer } from './order/order.reducer';
import { userReducer } from './user/user.reducer';
import { IAppState } from './IAppState';

export const reducer = combineReducers<IAppState>({
  orders: orderReducer,
  users: userReducer
});
