import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule, MatIcon, MatButtonModule, RouterLink],
  templateUrl: `./app-header.component.html`,
  styleUrl: `./app-header.component.scss`,
})
export class AppHeaderComponent implements OnInit {
  public username: string | null = null;

  constructor(private router: Router) {}
  ngOnInit() {
    this.username = (sessionStorage.getItem('username') || localStorage.getItem('username')) ?? null;
  }

  logout() {
    sessionStorage.removeItem('username');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
