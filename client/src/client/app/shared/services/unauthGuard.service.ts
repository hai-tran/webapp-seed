import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable, Inject } from '@angular/core';

import { IAuthService, AuthenticationService } from './iauth.service';
import { Config } from '../config/env.config';

@Injectable()
export class UnauthGuard implements CanActivate {
  constructor(private router: Router, @Inject(AuthenticationService) private authService: IAuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if ((state.url !== Config.DashboardUrl) && (true === this.authService.isAuthenticated())) {
      this.router.navigateByUrl(Config.DashboardUrl);
      return false;
    }
    return true;
  }
}
