import { Routes } from '@angular/router';
import { AppAndChild1ProvidedInRouteService } from '../../services/app-and-child-1-provided-in-route.service';
import { Child1ProvidedInRouteService } from '../../services/child-1-provided-in-route.service';
import { ChildrenProvidedInRouteService } from '../../services/children-provided-in-route.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./child-1.component').then((m) => m.Child1Component),
    providers: [
      Child1ProvidedInRouteService,
      ChildrenProvidedInRouteService,
      AppAndChild1ProvidedInRouteService,
    ],
    children: [
      {
        path: 'grand-child-1',
        loadChildren: () =>
          import('./grand-child-1/grand-child-1.routes').then((m) => m.routes),
      },
      {
        path: 'grand-child-2',
        loadChildren: () =>
          import('./grand-child-2/grand-child-2.routes').then((m) => m.routes),
      },
    ],
  },
];
