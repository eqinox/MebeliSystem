import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutesRoutingModule } from './app-routes.routing';

@NgModule({
    imports: [
        CommonModule,
        AppRoutesRoutingModule
    ],
    providers: [],
    declarations: [
    ],
    exports: [AppRoutesRoutingModule]
})
export class AppRoutesModule { }
