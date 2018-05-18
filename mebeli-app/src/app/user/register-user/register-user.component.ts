import { Component, OnInit } from '@angular/core';

import { UserActions } from '../../redux/user/user.actions';
import { User } from '../../models/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user: User = new User();

  constructor(
    private userActions: UserActions
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userActions.register(this.user);
  }

}
