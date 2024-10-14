import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cousin.component').then(m => m.CousinComponent)
  }
]
