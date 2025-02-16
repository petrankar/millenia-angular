import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { Product, Transaction, Account } from './product.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getAccount(productId: number): Observable<Account> {
    console.log(productId);
    return this.http.get<Account>(`${this.baseUrl}/account`);
  }

  getTransactions(productId: number): Observable<Transaction[]> {
    console.log(productId);
    return this.http.get<Transaction[]>(`${this.baseUrl}/transactions`);
  }
}
