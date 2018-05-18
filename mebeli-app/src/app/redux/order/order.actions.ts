import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IOrderState } from './order.state';
import { NgRedux } from 'ng2-redux';
import * as toastr from 'toastr';

import { OrderService } from '../../order/order.service';

// Models
import { Order } from '../../models/order';
import { AddOrderResponseModel } from '../../models/response-models/orders/add.order.response.model';
import { GetOrderResponseModel } from '../../models/response-models/orders/get.order.response.model';
import { UpdateOrderResponseModel } from '../../models/response-models/orders/update.order.response.model';

// Constants
export const ADD_ORDER = 'add/order';
export const GET_ALL = 'get/all';
export const GET_BY_ID = 'get/by/id';
export const UPDATE_ORDER = 'order/update';

@Injectable({
  providedIn: 'root'
})
export class OrderActions {
  constructor(
    private ngRedux: NgRedux<IOrderState>,
    private orderService: OrderService,
    private router: Router
  ) {}

  add(order: Order) {
    this.orderService
      .add(order)
      .subscribe((res: AddOrderResponseModel) => {
        if (res.success) {
          toastr.success(res.message);
          this.router.navigate(['orders/all']);
          this.ngRedux.dispatch({
            type: ADD_ORDER,
            order: res.order
          });
        } else {
          const errors = res.message;
          if (errors) {
            const firstKey = Object.keys(errors)[0];
            toastr.error(errors[firstKey]);
          }
        }
      });
  }

  getAll(queryString = null) {
    this.orderService
      .getAll(queryString)
      .subscribe((orders: { orders }) => {
        this.ngRedux.dispatch({
          type: GET_ALL,
          orders: orders.orders
        });
      });
  }

  getById(id: String) {
    this.orderService
      .getById(id)
      .subscribe((res: GetOrderResponseModel) => {
        if (res.success) {
          this.ngRedux.dispatch({
            type: GET_BY_ID,
            order: res.order
          });
        } else {
          const errors = res.message;
          if (errors) {
            const firstKey = Object.keys(errors)[0];
            toastr.error(errors[firstKey]);
          }
        }
      });
  }

  update(id: string, updatedOrder) {
    this.orderService
      .update(id, updatedOrder)
      .subscribe((res: UpdateOrderResponseModel) => {
        if (res.success) {
          toastr.success(res.message);
          this.ngRedux.dispatch({
            type: UPDATE_ORDER,
            updatedOrder: res.order
          });
        } else {
          const errors = res.message;
          if (errors) {
            const firstKey = Object.keys(errors)[0];
            toastr.error(errors[firstKey]);
          }
        }
      });
  }
}
