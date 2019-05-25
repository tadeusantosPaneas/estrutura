import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pns-navegator',
  templateUrl: './navegator.component.html',
  styleUrls: ['./navegator.component.css']
})
export class NavegatorComponent implements OnInit {

  constructor() { }
  isShown = false;

  toggle() {
      this.isShown = !this.isShown;
  }
  ngOnInit() {
  }

}
