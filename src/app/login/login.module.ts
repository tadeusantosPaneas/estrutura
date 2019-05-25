import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { OnBlurDirectiveDirective } from '../shared/directives/on-blur-directive.directive';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent,
    OnBlurDirectiveDirective
  ]
})
export class LoginModule { }
