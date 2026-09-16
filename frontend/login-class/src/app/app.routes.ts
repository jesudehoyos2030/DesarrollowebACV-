import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guards';
import { DashboardAdmin } from './features/dashboard/pages/dashboard-admin/dashboard_admin';
import { Usuarios } from './features/users/pages/user/user';
import { Home } from './features/home/pages/home/home';
import { Perfil } from './features/auth/pages/perfil/perfil';

export const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login')
        .then((component) => component.Login),
  },

  {
    path: 'registro',
    loadComponent: () =>
      import('./features/auth/pages/register/register')
        .then((component) => component.Register),
  },

  {
    path: 'recuperar-contrasena',
    loadComponent: () =>
      import('./features/auth/pages/forgot-password/forgot-password')
        .then((component) => component.ForgotPassword),
  },

  {
    path: 'app',
    loadComponent: () =>
      import('./layouts/main-layout/main-layout')
        .then((component) => component.MainLayout),

    canActivate: [authGuard],

    children: [
      {
        path: 'home',
        loadComponent: () =>
          Home,
      },

      {
      path: 'dashboard-admin',
      loadComponent: () =>
        DashboardAdmin
    },

    {
      path: 'usuarios',
      loadComponent: () =>
        Usuarios
    },
    {
      path: 'perfil',
      loadComponent: () =>
        Perfil
    },

    ],
  },

  {
    path: '**',
    redirectTo: 'login',
  },
];