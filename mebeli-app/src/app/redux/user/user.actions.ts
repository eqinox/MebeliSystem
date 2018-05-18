import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import { IUserState } from './user.state';
import * as toastr from 'toastr';
import { Auth } from '../../authorization/authorization';

import { UserService } from '../../user/user.service';

// Models
import { RegisterUserResponseModel } from '../../models/response-models/users/register.user.response.model';
import { LoginUserResponseModel } from '../../models/response-models/users/login.user.response.model';
import { User } from '../../models/user';

// Constants
export const ADD_USER = 'user/add';
export const LOGIN_USER = 'user/login';
export const LOGOUT_USER = 'user/logout';

@Injectable({
  providedIn: 'root'
})
export class UserActions {
  constructor(
    private ngRedux: NgRedux<IUserState>,
    private userService: UserService,
    private router: Router
  ) { }

  register(user: User) {
    this.userService
      .register(user)
      .subscribe((res: RegisterUserResponseModel) => {
        if (res.success) {
          toastr.success(res.message);
          Auth.saveUser(res.token, res.user);
          this.router.navigate(['orders/all']);
          this.ngRedux.dispatch({
            type: ADD_USER,
            user: res.user
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

  login(user: User) {
    this.userService
      .login(user)
      .subscribe((res: LoginUserResponseModel) => {
        if (res.success) {
          toastr.success(res.message);
          Auth.saveUser(res.token, res.user);
          this.router.navigate(['orders/add']);
          this.ngRedux.dispatch({
            type: LOGIN_USER,
            user: res.user
          });
        } else {
          toastr.error(res.message);
        }
      });
  }

  logOut() {
    if (Auth.isLoggedIn()) {
      toastr.success('logOut successfuly');
      this.router.navigate(['users/register']);
      Auth.removeUser();
      this.ngRedux.dispatch({
        type: LOGOUT_USER
      });
    } else {
      toastr.error('dont have logged user');
    }
  }
}
