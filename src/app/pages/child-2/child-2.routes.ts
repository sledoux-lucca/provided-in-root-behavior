import { Routes } from '@angular/router';
import { Child2ProvidedInRouteService } from '../../services/child-2-provided-in-route.service';
import { ChildrenProvidedInRouteService } from '../../services/children-provided-in-route.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./child-2.component').then((m) => m.Child2Component),
    providers: [Child2ProvidedInRouteService, ChildrenProvidedInRouteService],
  },
];
