import { TestBed } from '@angular/core/testing';

import { PRUEVA1UDFService } from './prueva1-udf.service';

describe('PRUEVA1UDFService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PRUEVA1UDFService = TestBed.get(PRUEVA1UDFService);
    expect(service).toBeTruthy();
  });
});
