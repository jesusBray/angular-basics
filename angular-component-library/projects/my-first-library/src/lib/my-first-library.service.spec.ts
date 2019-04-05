import { TestBed } from '@angular/core/testing';

import { MyFirstLibraryService } from './my-first-library.service';

describe('MyFirstLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFirstLibraryService = TestBed.get(MyFirstLibraryService);
    expect(service).toBeTruthy();
  });
});
