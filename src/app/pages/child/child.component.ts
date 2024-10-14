import { Component, inject } from '@angular/core';
import { ChildSpecificService } from '../../services/child-specific.service';
import { ChildrenSharedService } from '../../services/children-shared.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  providers: [ChildSpecificService, ChildrenSharedService]
})
export class ChildComponent {
  childSpecificService = inject(ChildSpecificService);
  childrenSharedService = inject(ChildrenSharedService);
}
