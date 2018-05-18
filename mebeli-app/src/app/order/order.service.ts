import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../share/http.service';

import { Order } from '../models/order';
import { Auth } from '../authorization/authorization';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpOptionsToAuthenticate;

  constructor(private httpService: HttpService) {
    this.createAuthenticationHeaders();
  }

  createAuthenticationHeaders() {
    this.httpOptionsToAuthenticate = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': Auth.loadToken()
      })
    };
  }

  add(order: Order) {
    this.createAuthenticationHeaders();
    return this.httpService
      .post('/orders/add', order, this.httpOptionsToAuthenticate);
  }

  getAll(queryString: '' = null) {
    this.createAuthenticationHeaders();
    return this.httpService
      .get('/orders/all', queryString, this.httpOptionsToAuthenticate);
  }

  getById(id) {
    this.createAuthenticationHeaders();
    return this.httpService
      .get(`/orders/${id}`, null, this.httpOptionsToAuthenticate);
  }

  update(id, updatedOrder) {
    this.createAuthenticationHeaders();
    return this.httpService
      .put(`/orders/update/${id}`, updatedOrder, this.httpOptionsToAuthenticate);
  }
}
