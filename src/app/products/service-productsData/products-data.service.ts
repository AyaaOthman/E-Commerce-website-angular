import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductsData } from 'src/app/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class productsDataService {
  constructor(private http: HttpClient) {}
  getProductsList() {
    return this.http.get(
      'https://dummyjson.com/products'
    ) as Observable<ProductsData>;
  }
  getProductDetails(id: string) {
    return this.http.get(
      `https://dummyjson.com/products/${id}`
    ) as Observable<Product>;
  }
}
