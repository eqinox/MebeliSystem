import { Component, OnInit } from '@angular/core';

import { Order } from '../../models/order';
import { OrderActions } from '../../redux/order/order.actions';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  order: Order = new Order();
  date: Date = new Date();

  constructor(private orderActions: OrderActions) {
    this.order.date = new Date();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.orderActions.add(this.order);
  }

}
