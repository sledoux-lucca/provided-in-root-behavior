import { Component, inject } from '@angular/core';
import { Child1SpecificService } from '../../services/child-1-specific.service';
import { ChildrenSharedService } from '../../services/children-shared.service';

@Component({
  selector: 'app-child-1',
  standalone: true,
  imports: [],
  template: `
    <h2>Child1Component</h2>
    <p>Child 1 Specific Service : {{ child1SpecificService.name() }}</p>
    <p>Children Shared Service : {{ childrenSharedService.name() }}</p>
  `,
})
export class Child1Component {
  child1SpecificService = inject(Child1SpecificService);
  childrenSharedService = inject(ChildrenSharedService);
}
