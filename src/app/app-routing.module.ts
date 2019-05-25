import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { LoginGuard } from './services/login/login.guard';
import { LoginComponent } from './login/login/login.component';
import { MenuComponent } from './menu/menu/menu.component';
import { AuthGuard } from './services/guard/auth.guard';
const routes: Routes = [];
// const routes: Routes = [
//   { path:  '', 
//    redirectTo: 'login',
//    pathMatch: 'full',
//    canActivate: [LoginGuard]
//    },
//   { path: 'login', component: LoginComponent, canActivate: [LoginGuard],
//   data: {
//       title: 'Login'
//   }},
//   { path: 'menu/:id', component: MenuComponent, canActivate: [AuthGuard], data: {
//     title: 'Menu'
//    }},  
//   { path: '**', component: NotFoundComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
