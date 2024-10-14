import { Routes } from '@angular/router';
import { ChildSpecificService } from '../../services/child-specific.service';
import { ChildrenSharedService } from '../../services/children-shared.service';

export const routes: Routes = [
  {
    path: '',
    providers: [ChildSpecificService, ChildrenSharedService],
    loadComponent: () => import('./child.component').then(m => m.ChildComponent)
  }
]
