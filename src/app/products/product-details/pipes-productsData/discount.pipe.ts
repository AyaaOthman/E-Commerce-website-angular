import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  discountRes: any = 0;
  discount: any = 0;
  transform(value: any, ...args: any): any {
    if (value) {
      this.discount = (args / 100) * value;
      this.discountRes = value - this.discount;
      return this.discountRes;
    }
  }
}
