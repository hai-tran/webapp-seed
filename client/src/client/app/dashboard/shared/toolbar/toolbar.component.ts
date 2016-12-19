import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { IAuthService, AuthenticationService, Config } from '../../../shared/index';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent {
  @Output() menuToggle = new EventEmitter();
  isUserMenuToggled = false;

  constructor(private router: Router, @Inject(AuthenticationService) private authService: IAuthService) {
  }

  onMenuToggled() {
    this.menuToggle.emit();
  }

  logout() {
    this.authService.logout().then(res => {
      this.router.navigateByUrl(Config.LoginUrl);
    });
  }
}

