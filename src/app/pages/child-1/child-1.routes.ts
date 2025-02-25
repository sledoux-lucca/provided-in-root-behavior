import { Routes } from '@angular/router';
import { AppAndChild1InRouteService } from '../../services/app-and-child-1-in-route.service';
import { Child1InRouteService } from '../../services/child-1-in-route.service';
import { ChildrenSharedInRouteService } from '../../services/children-shared-in-route.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./child-1.component').then((m) => m.Child1Component),
    providers: [
      Child1InRouteService,
      ChildrenSharedInRouteService,
      AppAndChild1InRouteService,
    ],
  },
];
