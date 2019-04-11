import { TestBed } from '@angular/core/testing';

import { UdfService } from './udf.service';

describe('UdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UdfService = TestBed.get(UdfService);
    expect(service).toBeTruthy();
  });
});
