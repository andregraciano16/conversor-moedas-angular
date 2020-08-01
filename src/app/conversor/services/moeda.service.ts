import { Injectable } from '@angular/core';

import { Moeda } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private moedas: Moeda[];

  constructor() { }

  private moedasObj = [
    { sigla: 'AUD', descricao: 'Dólar australiano' },
    { sigla: 'BGN', descricao: 'Lev búlgaro' },
    { sigla: 'BRL', descricao: 'Real Brasileiro' },
    { sigla: 'CAD', descricao: 'Dólar australiano' },
    { sigla: 'CHF', descricao: 'Franco suíço' },
    { sigla: 'EUR', descricao: 'Euro'}
  ];

  listarTodas(): Moeda[] {
    if (this.moedas) {
      return this.moedas;
    }

    this.moedas = [];

    for (const moedaObj of this.moedasObj) {
      const moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }
    return this.moedas;
  }
}
