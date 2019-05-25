import { HttpInterceptor, HttpRequest,
         HttpHandler, HttpSentEvent, HttpHeaderResponse,
         HttpProgressEvent, HttpResponse,
         HttpUserEvent } from "@angular/common/http";
import { Observable } from "rxjs";

import { AuthService } from "../login/auth.service";
import { Injectable } from "@angular/core";

@Injectable() 
export class RequestInterceptor implements HttpInterceptor { 

    constructor(private authService: AuthService ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent 
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

            if(this.authService.isLogged())
            {
                const token = this.authService.getToken();
               
                req = req.clone({
                    setHeaders: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });
            }
            return next.handle(req);
        }
}