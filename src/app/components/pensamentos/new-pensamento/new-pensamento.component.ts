import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-pensamento',
  templateUrl: './new-pensamento.component.html',
  styleUrls: ['./new-pensamento.component.css']
})
export class NewPensamentoComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'dev',
    moedlo: '1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cancel():void {
  }
}
