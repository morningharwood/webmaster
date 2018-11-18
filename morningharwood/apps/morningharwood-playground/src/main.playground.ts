import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';


PlaygroundModule
  .configure({
    selector: 'morningharwood-root',
    overlay: false,
    modules: [],
  });

platformBrowserDynamic()
  .bootstrapModule(PlaygroundModule);
