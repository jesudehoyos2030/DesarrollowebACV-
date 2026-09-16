import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LOGIN_USERS_MOCK } from '../../../mocks/login/login.mock';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  goToperfil() {
  this.router.navigate(['/perfil']);
}
}