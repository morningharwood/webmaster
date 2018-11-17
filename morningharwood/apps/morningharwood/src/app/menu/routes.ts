import {
  RouterModule,
  Routes,
} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MenuMasterComponent } from './master.component';


export const config: Routes = [
  {
    path: 'menu',
    children: [
      {
        path: '',
        component: MenuMasterComponent,
      },
      // {
      //   path: ':slug',
      //   component: DetailWorkContainerComponent,
      // },
    ],
  },
];

export const routes: ModuleWithProviders = RouterModule.forChild(config);
