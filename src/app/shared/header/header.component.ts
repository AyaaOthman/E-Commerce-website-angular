import { Component } from '@angular/core';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ProductsCounterService } from '../../products/service-productsData/products-counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMenuCollapsed = true;

  countOfCartProducts: number = 0;
  faBars = faBars;
  faCartShopping = faCartShopping;
  constructor(private ProductsCounterService: ProductsCounterService) {}
  ngOnInit() {
    this.ProductsCounterService.getCounterVal().subscribe((val) => {
      this.countOfCartProducts = val;
    });
  }
}
