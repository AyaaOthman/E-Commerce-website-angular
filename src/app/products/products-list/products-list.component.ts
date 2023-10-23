import { Component } from '@angular/core';
import { productsDataService } from '../service-productsData/products-data.service';
import { ProductsData, Product } from 'src/app/interface';
import { ProductsCounterService } from '../service-productsData/products-counter.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  productsData: Product[] = [];
  cartProducts: Product[] = [];
  countOfCartProducts: number = 0;

  constructor(
    private productsDataService: productsDataService,
    private ProductsCounterService: ProductsCounterService
  ) {}
  ngOnInit() {
    this.productsDataService
      .getProductsList()
      .subscribe((data) => (this.productsData = data.products));
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      this.ProductsCounterService.setCounterVal(this.cartProducts.length);
    }
  }
  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);

      let existedProducts = this.cartProducts.find(
        (product: any) => product.product.id === event.product.id
      );
      if (existedProducts) {
        alert('product already added to your cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
        this.ProductsCounterService.setCounterVal(this.cartProducts.length);
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
