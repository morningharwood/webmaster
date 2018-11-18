import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppAuthorModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
  enableProdMode();

}

platformBrowserDynamic()
  .bootstrapModule(AppAuthorModule)
  .catch(err => console.error(err));
