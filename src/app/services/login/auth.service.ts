import { Injectable } from '@angular/core';
import * as jtw_decode from 'jwt-decode';

const KEY = 'pnstoken';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  hasToken() {      
    return !this.getToken();
}

setToken(token: string) {
    window.localStorage.setItem(KEY, token);
}

getToken() {
    return window.localStorage.getItem(KEY);
}

removeToken() {
    window.localStorage.removeItem(KEY);
}


isLogged() {
    const token = window.localStorage.getItem(KEY);
    if(token) {
                const user = jtw_decode(token);
                const expDate = new Date(user.exp * 1000);                
                return expDate > new Date();
          }    
            else
             return false;           
   }
}
