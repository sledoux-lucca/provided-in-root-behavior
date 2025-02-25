import { Routes } from '@angular/router';
import { ChildrenProvidedInRouteService } from '../../services/children-provided-in-route.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./child-3.component').then((m) => m.Child3Component),
    providers: [ChildrenProvidedInRouteService],
  },
];
