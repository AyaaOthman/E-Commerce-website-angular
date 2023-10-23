import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsCounterService {
  cartProducts: Product[] = [];

  private counter = new BehaviorSubject<number>(0);
  constructor() {}
  getCounterVal() {
    return this.counter.asObservable();
  }
  setCounterVal(newVal: number) {
    this.counter.next(newVal);
  }
}
