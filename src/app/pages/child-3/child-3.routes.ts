import { Routes } from '@angular/router';
import { ChildrenSharedInRouteService } from '../../services/children-shared-in-route.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./child-3.component').then((m) => m.Child3Component),
    providers: [ChildrenSharedInRouteService],
  },
];
