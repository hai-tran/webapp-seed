import { Routes } from '@angular/router';

import { AuthenticationRoutes } from './authentication/index';
import { Config } from './shared/index';
import { DashboardRoutes } from './dashboard/index';

export const routes: Routes = [
  ...AuthenticationRoutes,
  ...DashboardRoutes,

  { path: '**', redirectTo: Config.LoginUrl }
];
