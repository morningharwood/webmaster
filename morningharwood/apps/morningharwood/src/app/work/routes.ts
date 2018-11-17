import {
  RouterModule,
  Routes,
} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WorkMasterComponent } from './master.component';


export const config: Routes = [
  {
    path: 'work',
    children: [
      {
        path: '',
        component: WorkMasterComponent,
      },
    ],
  },
];

export const routes: ModuleWithProviders = RouterModule.forChild(config);
