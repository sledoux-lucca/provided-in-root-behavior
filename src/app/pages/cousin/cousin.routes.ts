import { Routes } from '@angular/router';
import { CousinSpecificService } from '../../services/cousin-specific.service';
import { ChildrenSharedService } from '../../services/children-shared.service';

export const routes: Routes = [
  {
    path: '',
    providers: [CousinSpecificService, ChildrenSharedService],
    loadComponent: () => import('./cousin.component').then(m => m.CousinComponent)
  }
]
