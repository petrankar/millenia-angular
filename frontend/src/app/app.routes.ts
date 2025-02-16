import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { AuthResolver } from './auth/auth.resolver';
export const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./auth/login-page/login-page.component').then((c) => c.LoginPageComponent),
        resolve: { auth: AuthResolver },
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'product',
    title: 'Product',
    loadComponent: () => import('./product/product.component').then((c) => c.ProductComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        title: 'ProductList',
        loadComponent: () => import('./product/product-list/product-list.component').then((c) => c.ProductListComponent),
        canActivate: [authGuard],
      },
      {
        path: ':id',
        title: 'ProductDetails',
        loadComponent: () => import('./product/product-details/product-details.component').then((c) => c.ProductDetailsComponent),
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: '**',
    title: 'PageNotFound',
    canActivate: [authGuard],
    loadComponent: () => import('./shared/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
];
