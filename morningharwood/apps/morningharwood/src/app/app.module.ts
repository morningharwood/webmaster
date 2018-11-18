import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './+router/state';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './+router/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApplicationRoutes } from './+router/module';
import { config } from './+router/config';
import { FirebaseModule } from '../../../../libs/firebase/src';
import { ImgModule } from '../../../../libs/img/src';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    NxModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ApplicationRoutes,
    RouterModule.forRoot(config, { initialNavigation: 'enabled' }),
    StoreModule.forRoot(reducers),
    FirebaseModule,
    ImgModule,
    EffectsModule.forRoot([ RouterEffects ]),
    !environment.production
    ? StoreDevtoolsModule.instrument()
    : [],
    StoreRouterConnectingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
