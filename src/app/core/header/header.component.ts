import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/User/user.service';
import { IUsuario } from 'src/app/model/IUsuario';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'pns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$: Observable<IUsuario>;
  mainItem$: Observable<any>;
  menuItems: any;
  showMenuIco = false;
  constructor(private userservice: UserService,
    private router: Router) {
    
  }

  logout() {
    this.userservice.logout();
    this.router.navigate(['']);
  }

  
  ngOnInit() {    
    this.user$ = this.userservice.getUser();
  }

}
