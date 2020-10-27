import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

  public sobre :string = 'O Pet App é uma iniciativa de regatar animais perdidos'
  constructor() { }

  ngOnInit() {
  }

}
