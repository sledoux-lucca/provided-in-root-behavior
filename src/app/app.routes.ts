import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'child',
    loadComponent: () => import('./pages/child/child.component').then(m => m.ChildComponent)
  },
  {
    path: 'cousin',
    loadComponent: () => import('./pages/cousin/cousin.component').then(m => m.CousinComponent)
  },
  {
    path: '**',
    redirectTo: 'child'
  }
];
