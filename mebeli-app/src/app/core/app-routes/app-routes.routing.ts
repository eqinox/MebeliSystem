import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Order components
import { AllOrdersComponent } from '../../order/all-orders/all-orders.component';
import { AddOrderComponent } from '../../order/add-order/add-order.component';
import { SingleOrderComponent } from '../../order/single-order/single-order.component';

// User components
import { RegisterUserComponent } from '../../user/register-user/register-user.component';
import { LoginUserComponent } from '../../user/login-user/login-user.component';
import { LogOutComponent } from '../../user/log-out/log-out.component';

// Guards
import { AuthGuard } from '../../authorization/guard/auth.guard';

const routes: Routes = [
  { path: 'orders/all', component: AllOrdersComponent, canActivate: [AuthGuard] },
  { path: 'orders/add', component: AddOrderComponent, canActivate: [AuthGuard] },
  { path: 'orders/:id', component: SingleOrderComponent, canActivate: [AuthGuard] },
  { path: 'users/register', component: RegisterUserComponent },
  { path: 'users/login', component: LoginUserComponent },
  { path: 'users/logout', component: LogOutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesRoutingModule { }
