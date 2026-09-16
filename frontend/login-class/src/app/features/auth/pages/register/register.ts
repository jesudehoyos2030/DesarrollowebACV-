import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group(
    {
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
      emergencyContact: [''], 
    },
  );

  goToLogin() {
    this.router.navigate(['/login']);
  }
}