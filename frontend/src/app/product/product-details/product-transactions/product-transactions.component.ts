import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import type { Transaction } from '../../product.types';
@Component({
  selector: 'app-product-transactions',
  imports: [CommonModule, MatIcon],
  templateUrl: `./product-transactions.component.html`,
  styleUrl: `./product-transactions.component.scss`,
})
export class ProductTransactionsComponent extends Input {
  @Input() transactions: Transaction[] = [];
}
