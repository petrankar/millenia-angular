import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductTransactionsComponent } from './product-transactions/product-transactions.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { MatIcon } from '@angular/material/icon';
import { ProductService } from '../product.service';
import type { Account, Transaction } from '../product.types';
@Component({
  selector: 'app-product-details',
  imports: [CommonModule, ProductTransactionsComponent, AccountCardComponent, MatIcon],
  templateUrl: `./product-details.component.html`,
  styleUrl: `./product-details.component.scss`,
})
export class ProductDetailsComponent {
  productId: number | null = null;
  account: Account = {} as Account;
  transactions: Transaction[] = [] as Transaction[];

  transactionHeader = ['History', 'Info', 'Statements'];

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getAccount(this.productId).subscribe({
      next: (data) => {
        this.account = data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.productService.getTransactions(this.productId).subscribe({
      next: (data) => {
        this.transactions = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  goBack(): void {
    this.router.navigate(['..']);
  }
}
