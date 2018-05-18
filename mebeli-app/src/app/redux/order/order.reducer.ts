import { IOrderState } from './order.state';
import { ADD_ORDER, GET_ALL, GET_BY_ID, UPDATE_ORDER } from './order.actions';

import { Order } from '../../models/order';

const initialOrderState: IOrderState = {
  orders: [],
  singleOrder: new Order()
};

function addOrder(state: IOrderState, action) {
  return Object.assign({}, state, {
    orders: [...state.orders, action.order]
  });
}

function getAll(state: IOrderState, action) {
  return Object.assign({}, state, { orders: action.orders });
}

function getById(state: IOrderState, action) {
  return Object.assign({}, state, { singleOrder: action.order });
}

function updateOrder(state: IOrderState, action) {
  return Object.assign({}, state, { singleOrder: action.updatedOrder });
}

export function orderReducer(state: IOrderState = initialOrderState, action) {
  switch (action.type) {
    case ADD_ORDER: {
      return addOrder(state, action);
    }
    case GET_ALL: {
      return getAll(state, action);
    }
    case GET_BY_ID: {
      return getById(state, action);
    }
    case UPDATE_ORDER: {
      return updateOrder(state, action);
    }
    default: {
      return state;
    }
  }
}
