import { Component, OnInit } from '@angular/core';
import { Auth } from '../../authorization/authorization';
import { UserActions } from '../../redux/user/user.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userActions: UserActions) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return Auth.isLoggedIn();
  }

  logOutUser() {
    this.userActions.logOut();
  }
}
