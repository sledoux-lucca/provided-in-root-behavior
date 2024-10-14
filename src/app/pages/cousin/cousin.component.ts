import { Component, inject } from '@angular/core';
import { ChildrenSharedService } from '../../services/children-shared.service';
import { CousinSpecificService } from '../../services/cousin-specific.service';

@Component({
  selector: 'app-cousin',
  standalone: true,
  imports: [],
  templateUrl: './cousin.component.html',
  styleUrl: './cousin.component.scss'
})
export class CousinComponent {
  cousinSpecificService = inject(CousinSpecificService);
  childrenSharedService = inject(ChildrenSharedService);
}
