import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, BehaviorSubject } from 'rxjs';
import { first, isEmpty } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'pns-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  itemsSubMenu: any;
  menuItems: any;  

  constructor(private route: ActivatedRoute,
       private alertService: AlertService) { }

  ngOnInit() {
       this.menuInCloseTaggle();
  }


  menuInCloseTaggle() {
    this.route.params.subscribe(res => {
      // this.menuservice.getSubMenuAll().subscribe(subMenu => {
      //   this.itemsSubMenu = subMenu;
      //   if (!this.itemsSubMenu) {
      //     this.alertService.success('Não foi possivel carregar o sub Menu ', true);
      //   }
      // }, err => {
      //   this.alertService.success(`opss Não foi possivel carregar o sub Menu Satatus code: ${err.status}`, true);
      // });
    });
  }

}
