import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthResolver implements Resolve<boolean> {
  constructor(private router: Router) {}

  resolve(): Observable<boolean> {
    const username = localStorage.getItem('username') || sessionStorage.getItem('username');
    if (username) {
      this.router.navigate(['/product']);
      return of(false);
    }
    return of(true);
  }
}
