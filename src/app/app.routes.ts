import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'child',
    loadChildren: () => import('./pages/child/child.routes').then(m => m.routes)
  },
  {
    path: 'cousin',
    loadChildren: () => import('./pages/cousin/cousin.routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: 'child'
  }
];
