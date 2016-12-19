import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationService, JwtAuthService, AuthGuard, UnauthGuard, RestClient, getAuthHttp } from './services/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, HttpModule],
  declarations: [],
  exports: [CommonModule, FormsModule, RouterModule],
  providers: [
    {
      provide: AuthenticationService,
      useClass: JwtAuthService
    },
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    RestClient,
    AuthGuard, UnauthGuard
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
