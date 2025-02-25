import { Routes } from '@angular/router';
import { Child2InRouteService } from '../../services/child-2-in-route.service';
import { ChildrenSharedInRouteService } from '../../services/children-shared-in-route.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./child-2.component').then((m) => m.Child2Component),
    providers: [Child2InRouteService, ChildrenSharedInRouteService],
  },
];
