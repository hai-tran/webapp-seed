import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, HttpModule,
    RouterModule.forRoot(routes), SharedModule.forRoot(),
    AuthenticationModule, DashboardModule],
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
