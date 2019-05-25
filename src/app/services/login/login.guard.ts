import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root'})
export class LoginGuard implements CanActivate {    
    constructor(private authService: AuthService,       
        private router: Router){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {       
         if(this.authService.isLogged()){
            this.router.navigate(
                ['menu/0']               
            );
           
            return false;
        }       
      return  true;
    }
}