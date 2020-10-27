import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termos',
  templateUrl: './termos.page.html',
  styleUrls: ['./termos.page.scss'],
})
export class TermosPage implements OnInit {

  public termo :string = 'É proibido qualquer copiá ou uso de dados fornecido na plataforma para ganho pessoal';
  constructor() { }

  ngOnInit() {
  }

}
