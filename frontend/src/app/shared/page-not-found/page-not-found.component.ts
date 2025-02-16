import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  template: `<p style="padding: 20px; display: flex; flex-direction: column; gap: 8px;">
    <span>The requested page not found!</span>
    <a routerLink=""> Go to home page</a>
  </p> `,
  styles: `p { display: flex; justify-content: center; align-items: center; height: 100vh; font-size: 28px; }`,
})
export class PageNotFoundComponent {}
