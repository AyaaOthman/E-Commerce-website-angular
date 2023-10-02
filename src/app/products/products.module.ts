import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterLink } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscountPipe } from './product-details/pipes-productsData/discount.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    DiscountPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    NgbRatingModule,
    FormsModule,
  ],
})
export class ProductsModule {}
