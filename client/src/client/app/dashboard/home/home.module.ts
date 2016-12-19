import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './index';
import { TaskComponent, TaskService } from './task/index';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [HomeComponent, TaskComponent],
  exports: [HomeComponent],
  providers: [TaskService]
})
export class HomeModule { }
