import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormField } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-login-page',
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    MatInputModule,
    MatButton,
    MatIconModule,
    MatCheckboxModule,
    MatFormField,
    MatFormFieldModule,
  ],
  providers: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  loginForm: FormGroup;
  footerLinks = [
    { title: 'Imprint', path: 'imprint' },
    { title: 'Legal resources', path: 'legal-resources' },
    { title: 'Data protection', path: 'data-protection' },
    { title: 'Accessibility', path: 'accessibility' },
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^\S+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      keepMeLoggedIn: false,
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, keepMeLoggedIn } = this.loginForm.value;
      if (keepMeLoggedIn) localStorage.setItem('username', username.trim());
      else sessionStorage.setItem('username', username.trim());
      this.router.navigate(['/product']);
    }
  }
}
