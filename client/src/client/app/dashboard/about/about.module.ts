import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutComponent } from './index';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})

export class AboutModule { }
