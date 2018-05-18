import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { SingleOrderComponent } from './single-order/single-order.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    NgbModule.forRoot()
  ],
  declarations: [AllOrdersComponent, AddOrderComponent, SingleOrderComponent],
  exports: [AllOrdersComponent],
  providers: []
})
export class OrderModule { }
