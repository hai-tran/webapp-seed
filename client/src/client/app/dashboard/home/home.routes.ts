import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { TaskComponent } from './task/index';

export const HomeRoutes: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/tasks',
    component: TaskComponent
  }
];
