import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/model/Token';
import { LoginService } from 'src/app/services/login/login.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { from } from 'rxjs';

@Component({
  selector: 'pns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginserve: LoginService,
    private alertService: AlertService,
    private router: Router) { }

  token: Token = {};
  username: string;
  password: string;
  showPassword = false;
  @ViewChild('btnLogar') blnUserLogin: ElementRef<HTMLInputElement>; 
  hasErros: boolean = false;
  ErrosMenssage: string = '';
  
  getLog(): void {    
    this.loginserve.GetUserToken(this.username, this.password).subscribe((token: Token) => {
      this.token = token;
      this.router.navigate(['/menu/0'], { queryParams: { page: 0 } });
      // this.router.navigateByUrl('menu/0');            
    }, err => {
      this.hasErros = true;
      if (err.status == 401) {       
        this.ErrosMenssage = `Não autorizado, verifique seus dados e tente novamente.`;
      }
      else {
        this.ErrosMenssage = `Não foi possivel executar a operação, status do erro ${err.status} .`;
      }
      
    });
  }
  mostrarSenha(event: { type: any; target: { checked: boolean; }; }) {
    this.showPassword = event.target.checked
  }

  SetFocos() {
    this.blnUserLogin.nativeElement.focus();
  }
  loginFocus() {
    this.hasErros = false;
  }


  ngOnInit() {
    this.hasErros = false;
  }

}
