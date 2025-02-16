import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Product } from '../product.types';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;

  getClassByProductType(): string {
    switch (this.product.productTypeId) {
      case 1:
        return 'purple';
      case 3:
        return 'blue';
      case 4:
        return 'green';
      default:
        return '';
    }
  }
}
