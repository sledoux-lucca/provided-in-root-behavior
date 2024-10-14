import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./child.component').then(m => m.ChildComponent)
  }
]
