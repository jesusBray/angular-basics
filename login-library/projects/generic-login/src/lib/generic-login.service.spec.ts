import { TestBed } from '@angular/core/testing';

import { GenericLoginService } from './generic-login.service';

describe('GenericLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericLoginService = TestBed.get(GenericLoginService);
    expect(service).toBeTruthy();
  });
});
