import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LOGIN_USERS_MOCK } from '../../../mocks/login/login.mock';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router); // Pa navegar entre las difernetes paginas

  // Credenciales de prueba
  private userTest = 'Jesus';
  private password = '1234567';

  // Es una forma de manejar datos que pueden cambiar durante la ejecución de la aplicación. Si escribe lo que no es se pone en True
  showPassword = signal(false);
  loginError = signal(false);

  // Para ir a la pestaña de registro 
  goToRegister() {
  this.router.navigate(['/registro']);
  }

  // Para ir a la pestaña de olvide mi contraseña
  goToForgotPassword() {
  this.router.navigate(['/recuperar-contrasena']);
}
  
  form = this.fb.group({
    // Pa poner lo que es obligatorio
    user: ['', Validators.required],
    password: ['', Validators.required],
  });

  // Aqui es donde se mira si las credenciales si corresponden con lo que se escriba en la pagina
  submit() {
    const { user, password } = this.form.value; // Aca se obtiene la informacion q se escribe
    console.log(user, password)
    const userFound = LOGIN_USERS_MOCK.find(
      (usermock) => usermock.user === user && usermock.password === password,
    );

    if (!userFound) {
      alert('Contraseña incorrecta')
      return
    } 
    // Crear session storage
    sessionStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/app/dashboard-admin']);
    }
  }
