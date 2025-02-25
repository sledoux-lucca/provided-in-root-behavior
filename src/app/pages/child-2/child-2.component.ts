import { Component, inject } from '@angular/core';
import { Child2SpecificService } from '../../services/child-2-specific.service';
import { ChildrenSharedService } from '../../services/children-shared.service';

@Component({
  selector: 'app-child-2',
  imports: [],
  template: `
    <h2>Child2Component</h2>
    <p>Child 2 Specific Service : {{ child2SpecificService.name() }}</p>
    <p>Children Shared Service : {{ childrenSharedService.name() }}</p>
  `,
})
export class Child2Component {
  child2SpecificService = inject(Child2SpecificService);
  childrenSharedService = inject(ChildrenSharedService);
}
