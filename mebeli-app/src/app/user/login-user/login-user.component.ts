import { Component, OnInit } from '@angular/core';

import { UserActions } from '../../redux/user/user.actions';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  user: User = new User();

  constructor(
    private userActions: UserActions
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userActions.login(this.user);
  }
}
