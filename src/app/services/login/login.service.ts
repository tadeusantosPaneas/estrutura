import { UserService } from './../User/user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

import { Token } from 'src/app/model/Token';



const API = environment.LoginUrl;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private userservice: UserService) { }

  GetUserToken(userName: string, password: string) {
    return this.http.post<Token>(API,
        {
            'login': userName,
            'senha': password
        }).pipe(tap(resp => {
          const token = resp;
          this.userservice.setToken(token.token);
        }));
}

}
