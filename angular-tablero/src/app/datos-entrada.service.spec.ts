import { TestBed, inject } from '@angular/core/testing';

import { DatosEntradaService } from './datos-entrada.service';

describe('DatosEntradaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosEntradaService]
    });
  });

  it('should be created', inject([DatosEntradaService], (service: DatosEntradaService) => {
    expect(service).toBeTruthy();
  }));
});
