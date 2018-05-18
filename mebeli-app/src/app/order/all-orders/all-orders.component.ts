import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { Order } from '../../models/order';
import { IAppState } from '../../redux/IAppState';
import { OrderActions } from '../../redux/order/order.actions';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  itemsPerPage: Number = 4;
  page: Number = 1;
  orders: Order[];
  query: { neighborhood: string, city: string, name: string, dateFrom: Date, dateTo: Date } =
   {neighborhood: '', city: '', name: '', dateFrom: null, dateTo: null };
  navigationSubscription;
  model: NgbDateStruct;

  constructor(
    private orderActions: OrderActions,
    private ngRedux: NgRedux<IAppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

   initialiseInvites() {
     // get query parameters from url
    this.activatedRoute.queryParams.subscribe(params => {
      this.query.neighborhood = params['neighborhood'];
      this.query.city = params['city'];
      this.query.name = params['name'];
    });
    this.orderActions.getAll(this.query);
    this.ngRedux
      .select(state => state.orders)
      .subscribe(orders => {
        this.orders = orders.orders;
      });
   }

  ngOnInit() {
    this.initialiseInvites();
  }

  onNeighborhoodChange() {
    // set query parameters to url
    const urlTree = this.router.parseUrl(this.router.url);
    urlTree.queryParams['neighborhood'] = this.query.neighborhood === undefined ? '' : this.query.neighborhood;
    this.router.navigateByUrl(urlTree);

    this.orderActions.getAll(this.query);
  }

  onCityChange() {
    // set query parameters to url
    const urlTree = this.router.parseUrl(this.router.url);
    urlTree.queryParams['city'] = this.query.city === undefined ? '' : this.query.city;
    this.router.navigateByUrl(urlTree);

    this.orderActions.getAll(this.query);
  }

  onNameChange() {
    // set query parameters to url
    const urlTree = this.router.parseUrl(this.router.url);
    urlTree.queryParams['name'] = this.query.name === undefined ? '' : this.query.name;
    this.router.navigateByUrl(urlTree);

    this.orderActions.getAll(this.query);
  }

  onPageChange(event) {
    this.page = event;
  }
}
