import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Customn modules
import { CoreModule } from './core/core.module';
import { OrderModule } from './order/order.module';
import { ShareModule } from './share/share.module';
import { UserModule } from './user/user.module';
import { GuardModule } from './authorization/guard/guard.module';

// Components
import { AppComponent } from './app.component';

// Redux
import { IAppState } from './redux/IAppState';
import { store } from './redux/store';
import { NgRedux } from 'ng2-redux';
import { NgReduxModule } from 'ng2-redux';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    CoreModule,
    OrderModule,
    ShareModule,
    UserModule,
    GuardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
