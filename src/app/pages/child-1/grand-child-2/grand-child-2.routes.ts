import { Routes } from '@angular/router';
import { ChildrenProvidedInRouteService } from '../../../services/children-provided-in-route.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./grand-child-2.component').then((m) => m.GrandChild2Component),
    providers: [ChildrenProvidedInRouteService],
  },
];
