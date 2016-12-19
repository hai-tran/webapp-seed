import { Route } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UnauthGuard } from '../shared/index';

export const AuthenticationRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthGuard],
  }
];
