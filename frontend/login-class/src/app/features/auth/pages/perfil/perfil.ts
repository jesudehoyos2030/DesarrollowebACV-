import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LOGIN_USERS_MOCK } from '../../../mocks/login/login.mock';

@Component({
  selector: 'perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  goTologin() {
  sessionStorage.setItem('isLoggedIn', 'false');
  this.router.navigate(['/login']);
  }
  goTohome() {
  this.router.navigate(['/home']);
}
  }