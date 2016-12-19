import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthenticationModule { }
