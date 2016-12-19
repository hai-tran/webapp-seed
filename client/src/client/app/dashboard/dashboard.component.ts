import { Component, ViewChild } from '@angular/core';

import { SidebarComponent } from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent {
  @ViewChild(SidebarComponent) sidebarComponent: SidebarComponent;
}
