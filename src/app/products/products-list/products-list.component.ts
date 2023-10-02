import { Component } from '@angular/core';
import { productsDataService } from '../service-productsData/products-data.service';
import { ProductsData, Product } from 'src/app/interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  productsData: Product[] = [];
  cartProducts: Product[] = [];
  constructor(private productsDataService: productsDataService) {}
  ngOnInit() {
    this.productsDataService
      .getProductsList()
      .subscribe((data) => (this.productsData = data.products));
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
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
