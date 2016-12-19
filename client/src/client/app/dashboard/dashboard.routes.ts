import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { DashboardComponent } from './dashboard.component';
import { HomeRoutes } from './home/index';

import { AuthGuard } from '../shared/index';

export const DashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      ...HomeRoutes,
      ...AboutRoutes,
      { path: '**', redirectTo: HomeRoutes[0].path, pathMatch: 'full' },
    ]
  }
];
