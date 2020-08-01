import { NumeroDirective } from './numero.directive';
import { ElementRef } from '@angular/core';

describe('NumeroDirective', () => {
  it('should create an instance', () => {
    const directive = new NumeroDirective(new ElementRef(1));
    expect(directive).toBeTruthy();
  });
});
