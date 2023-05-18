import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento/pensamento.component';

@Component({
  selector: 'app-list-pensamento',
  templateUrl: './list-pensamento.component.html',
  styleUrls: ['./list-pensamento.component.css']
})
export class ListPensamentoComponent implements OnInit {

  listaPensamentos: IPensamento[] = [
    {
      conteudo: 'Eu amo teste angular',
      autoria: 'Angelo bordin',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
