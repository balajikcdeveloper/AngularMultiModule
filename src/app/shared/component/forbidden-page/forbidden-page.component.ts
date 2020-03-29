import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forbidden-page',
  templateUrl: './forbidden-page.component.html',
  styleUrls: ['./forbidden-page.component.scss'],
  styles:[`:host {align-self: center;}`]
})
export class ForbiddenPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
