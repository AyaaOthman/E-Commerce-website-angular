import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productsDataService } from '../service-productsData/products-data.service';
import { Product } from 'src/app/interface';
import { DiscountPipe } from '../product-details/pipes-productsData/discount.pipe';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  activeId: string = '';
  SelectedProduct: Product = {
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
    images: [],
  };
  currentRate: number = 0;
  discount!: DiscountPipe;
  constructor(
    private activeRoute: ActivatedRoute,
    private productsDataService: productsDataService
  ) {}
  ngOnInit() {
    this.activeId = this.activeRoute.snapshot.params['id'];
    this.productsDataService
      .getProductDetails(this.activeId)
      .subscribe(
        (data: Product) => (
          (this.SelectedProduct = data), (this.currentRate = data.rating)
        )
      );
  }
}
