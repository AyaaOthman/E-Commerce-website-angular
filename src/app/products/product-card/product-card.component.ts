import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  cartButton: boolean = false;
  amount: number = 0;
  @Output() addToCartProduct = new EventEmitter();
  @Input() product: Product = {
    id: '',
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [''],
  };
  constructor(private router: Router) {}
  redirectToProductDetails(id: string) {
    this.router.navigate(['product-details', id]);
  }
  addProductToCart() {
    this.addToCartProduct.emit({ product: this.product, amount: this.amount });
  }
}
