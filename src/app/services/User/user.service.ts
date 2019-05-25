import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jtw_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IUsuario } from 'src/app/model/IUsuario';
import { AuthService } from '../login/auth.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { environment } from 'src/environments/environment.prod';



const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<IUsuario>(null);
  private userName: string;
  
  constructor(private authService: AuthService,
    private router: Router,  
    private alertService: AlertService,
    private httpClient: HttpClient) { }

  setToken(token: string) {
    this.authService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }
  private decodeAndNotify() {
    this.loadUserFronToken();
    this.router.navigateByUrl('menu/0');
  }

  loadUserFronToken() {
    const token = this.authService.getToken();
    const user = jtw_decode(token);
    const userLogin = user as IUsuario;
    this.userName = userLogin.Nome;
    this.userSubject.next(userLogin);
  }

  logout() {
    this.authService.removeToken();
    this.userSubject.next(null);
  }

  getUserName() {
    return this.userName;
  }
}
