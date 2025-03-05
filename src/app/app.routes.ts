import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'child-1',
    loadChildren: () =>
      import('./pages/child-1/child-1.routes').then((m) => m.routes),
  },
  {
    path: 'child-2',
    loadChildren: () =>
      import('./pages/child-2/child-2.routes').then((m) => m.routes),
  },
  {
    path: 'child-3',
    loadChildren: () =>
      import('./pages/child-3/child-3.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
