import { Component, OnInit } from '@angular/core';
import { Auth } from '../../authorization/authorization';
import { UserActions } from '../../redux/user/user.actions';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(
    private userActions: UserActions
  ) { }

  ngOnInit() {
    this.userActions.logOut();
  }

}
