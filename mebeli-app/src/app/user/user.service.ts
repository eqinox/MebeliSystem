import { Injectable } from '@angular/core';
import { HttpService } from '../share/http.service';
import { Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

import { Auth } from '../authorization/authorization';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions;

  constructor(private httpService: HttpService) {
    this.createAuthenticationHeaders();
   }

  createAuthenticationHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': Auth.loadToken()
      })
    };
  }

  register(user: User) {
    this.createAuthenticationHeaders();
    return this.httpService
      .post('/users/register', user);
  }

  login(user: User) {
    this.createAuthenticationHeaders();
    return this.httpService
      .post('/users/login', user);
  }
}
