import { Routes } from '@angular/router';
import { Child2SpecificInRouteService } from '../../services/child-2-specific-in-route.service';
import { ChildrenSharedInRouteService } from '../../services/children-shared-in-route.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./child-2.component').then((m) => m.Child2Component),
    providers: [Child2SpecificInRouteService, ChildrenSharedInRouteService],
  },
];
