import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, HomeModule, AboutModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
