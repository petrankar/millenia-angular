import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../shared/app-header/app-header.component';
import { AppNavMenuComponent } from '../shared/app-nav-menu/app-nav-menu.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-product',
  imports: [RouterOutlet, AppHeaderComponent, AppNavMenuComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  private breakpointObserver: BreakpointObserver = inject(BreakpointObserver);

  public showBottomNav = true;

  constructor() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      if (result.matches) {
        this.showBottomNav = true;
      } else {
        this.showBottomNav = false;
      }
    });
  }
}
