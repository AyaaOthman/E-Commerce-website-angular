import { TestBed } from '@angular/core/testing';

import { ProductsCounterService } from './products-counter.service';

describe('ProductsCounterService', () => {
  let service: ProductsCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
