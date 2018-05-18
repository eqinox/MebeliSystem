import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [...AUTH_PROVIDERS],
  declarations: []
})
export class GuardModule { }
