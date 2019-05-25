import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { RequestInterceptor } from '../services/interceptors/RequestInterceptor';
import { AlertModule } from '../shared/components/alert/alert.module';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { MenuModule } from '../menu/menu.module';
import { ShowIfLoggedModule } from '../shared/directives/show-if-logged.module';
import { RouterModule } from '@angular/router';
import { NavegatorModule } from '../shared/components/menu/navegator.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AlertModule,
    LoadingModule,
    MenuModule,  
    ShowIfLoggedModule,
    NavegatorModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }
]
 
})
export class CoreModule { }
