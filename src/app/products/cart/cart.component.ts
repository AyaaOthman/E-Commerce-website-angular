import { Component } from '@angular/core';
import { Product } from 'src/app/interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartProducts: any[] = [];
  total: number = 0;
  ngOnInit() {
    this.addToCart();
    this.getCartTotal();
  }
  addToCart() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
  }
  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total +=
        this.cartProducts[x].product.price * this.cartProducts[x].amount;
    }
  }
  lessAmount(index: number) {
    this.cartProducts[index].amount--;
    this.getCartTotal();

    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  addAmount(index: number) {
    this.cartProducts[index].amount++;
    this.getCartTotal();

    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  removeItemFromCart(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotal();

    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
}
