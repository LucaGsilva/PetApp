import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguranca',
  templateUrl: './seguranca.page.html',
  styleUrls: ['./seguranca.page.scss'],
})
export class SegurancaPage implements OnInit {

  public Dica :string = 'Não compartilhe dados pessoas seu retardado';
  constructor() { }

  ngOnInit() {
  }

}
