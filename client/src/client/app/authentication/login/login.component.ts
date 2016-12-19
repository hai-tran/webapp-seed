import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { IAuthService, AuthenticationService, Config, UserCredential } from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent {
  credential: UserCredential = new UserCredential();
  errorMessage: string;

  constructor( @Inject(AuthenticationService) private auth: IAuthService, private router: Router) {
  }

  login() {
    this.errorMessage = '';
    this.auth.login(this.credential).then(res => {
      this.router.navigateByUrl(Config.DashboardUrl);
    }).catch(err => {
      this.errorMessage = err.message;
    });
  }
}
