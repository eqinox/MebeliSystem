import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutesModule } from './app-routes/app-routes.module';

// Components
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutesModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent, RouterModule]
})
export class CoreModule { }
