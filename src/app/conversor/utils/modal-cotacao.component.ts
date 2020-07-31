import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConversaoResponse, Conversao } from '../models/';
import { ConversorService } from '../services';

@Component({
  selector: 'app-modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();
  @Output() confirm = new EventEmitter<any>();

  constructor(private conversaoService: ConversorService) { }

  ngOnInit(): void {
  }

  novaConsulta() {
    this.confirm.emit();
  }

  get valorConvertido(): string {
    if (this.conversaoResponse === undefined) {
      return '0';
    }
    return (this.conversao.valor *
      this.conversaoResponse.rates[this.conversao.moedaPara])
      .toFixed(2);
  }

  get cotacaoPara(): number {
    return this.conversaoService.cotacaoPara(
      this.conversaoResponse, this.conversao
    );
  }

  get cotacaoDe(): string {
    return this.conversaoService.cotacaoDe(
      this.conversaoResponse, this.conversao
    );
  }

  get dataCotacao(): string {
    return this.conversaoService.dataCotacao(
      this.conversaoResponse
    );
  }
}
