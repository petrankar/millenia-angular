import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-nav-menu',
  imports: [CommonModule, RouterLink, MatIcon, MatButtonModule],
  templateUrl: `./app-nav-menu.component.html`,
  styleUrl: './app-nav-menu.component.scss',
})
export class AppNavMenuComponent {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
