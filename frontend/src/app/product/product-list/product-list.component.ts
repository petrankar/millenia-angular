import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../product.service';
import type { Product } from '../product.types';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCardComponent, MatButton],
  templateUrl: `./product-list.component.html`,
  styleUrl: `./product-list.component.scss`,
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  currentAccounts: Product[] = [];
  loans: Product[] = [];
  creditCards: Product[] = [];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.productList = data;
        this.currentAccounts = this.productList.filter((product) => product.productTypeId === 1);
        this.loans = this.productList.filter((product) => product.productTypeId === 3);
        this.creditCards = this.productList.filter((product) => product.productTypeId === 4);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  goToProductDetails(id: string) {
    console.log(id);
    this.router.navigate(['/product', '00000000001789876']);

    // I have hardcoded this id because is the only one account in the provided data.json
    // Provided account data should be associated with a productId property to be able to request
    // the correct account for the providedId on the http call
    // So the request will be look like this:

    // this.router.navigate(['/product', id.toString()]);
  }
}
