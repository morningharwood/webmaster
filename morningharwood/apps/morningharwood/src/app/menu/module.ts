import { NgModule } from '@angular/core';
import { MenuMasterComponent } from './master.component';
import { CommonModule } from '@angular/common';
import * as menuRoutes from './routes';


const EXPORTS_AND_DECLARATIONS = [ MenuMasterComponent ];

@NgModule({
  imports: [
    CommonModule,
    menuRoutes.routes,
  ],
  declarations: [ ...EXPORTS_AND_DECLARATIONS ],
  exports: [ ...EXPORTS_AND_DECLARATIONS ],
})
export class MenuModule {
}
