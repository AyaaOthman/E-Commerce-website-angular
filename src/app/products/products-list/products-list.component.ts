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
  constructor(private productsDataService: productsDataService) {}
  ngOnInit() {
    this.productsDataService
      .getProductsList()
      .subscribe((data) => (this.productsData = data.products));
  }
}
