import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./child-2.component').then((m) => m.Child2Component),
  },
];
