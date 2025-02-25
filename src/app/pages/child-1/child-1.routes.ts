import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./child-1.component').then((m) => m.Child1Component),
  },
];
