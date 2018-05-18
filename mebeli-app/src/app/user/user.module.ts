import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RegisterUserComponent, LoginUserComponent, LogOutComponent],
  providers: []
})
export class UserModule { }
