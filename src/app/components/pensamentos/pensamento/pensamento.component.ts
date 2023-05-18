import { Component, OnInit, Input } from '@angular/core';

export interface IPensamento {
  conteudo?: string;
  autoria?: string;
  modelo?: string;
}

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: IPensamento = {};

  constructor() { }

  ngOnInit(): void {
  }

  tamanhoPensamento(): string {
    return (this.pensamento.conteudo && this.pensamento.conteudo?.length >= 256) ? 'pensamento-g' : 'pensamento-p'
  }

}
