import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "../login/auth.service";
import { UserService } from "../User/user.service";


@Injectable({ providedIn:'root'})
export class AuthGuard implements CanActivate {
    
    constructor(private authService: AuthService,
        private userservice: UserService,
        private router: Router){ }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {       
         if(!this.authService.isLogged()){
            this.router.navigate(
                ['']               
            );
            return false;
        }
        this.userservice.loadUserFronToken();       
      return  true;
    }
}
