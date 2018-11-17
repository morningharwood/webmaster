import { Routes } from '@angular/router';


export enum RoutesName {
  PROFILE = 'profile',
  MENU = 'menu',
  WORK = 'work',
}

export const config: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RoutesName.MENU,
  },
  // {
  //   path: 'login',
  //   loadChildren: './login/module#LoginRouteModule',
  // },
  // {
  //   path: '**',
  //   component: ErrorMasterComponent,
  // },
];


