import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// For Redux
import { select, NgRedux } from 'ng2-redux';
import { Order } from '../../models/order';
import { IAppState } from '../../redux/IAppState';
import { OrderActions } from '../../redux/order/order.actions';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {
  order: Order;
  editMode: Boolean = false;
  id;

  constructor(
      private router: ActivatedRoute,
      private ngRedux: NgRedux<IAppState>,
      private orderActions: OrderActions
    ) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');

    this.orderActions.getById(this.id);
    this.ngRedux
      .select(state => state.orders)
      .subscribe(orders => {
        console.log(orders);
        this.order = orders.singleOrder;
      });
  }

  toggleEditMode() {
    if (this.editMode) {
      this.orderActions.update(this.id, this.order);
    }
    this.editMode = !this.editMode;
  }

}
