import { NgModule } from '@angular/core';
import { WorkMasterComponent } from './master.component';
import { CommonModule } from '@angular/common';
import {routes} from './routes';


const EXPORTS_AND_DECLARATIONS = [ WorkMasterComponent ];

@NgModule({
  imports: [
    CommonModule,
    routes,
  ],
  declarations: [ ...EXPORTS_AND_DECLARATIONS ],
  exports: [ ...EXPORTS_AND_DECLARATIONS ],
})
export class WorkModule {
}
