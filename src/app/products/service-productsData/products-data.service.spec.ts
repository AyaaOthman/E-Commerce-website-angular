import { TestBed } from '@angular/core/testing';

import { productsDataService } from './products-data.service';

describe('productsDataService', () => {
  let service: productsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(productsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
