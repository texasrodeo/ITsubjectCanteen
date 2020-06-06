import { TestBed } from '@angular/core/testing';

import { BagstorageService } from './bagstorage.service';

describe('BagstorageService', () => {
  let service: BagstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BagstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
