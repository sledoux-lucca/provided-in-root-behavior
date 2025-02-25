import { Component, inject } from '@angular/core';
import { Child1And2Service } from '../../services/child-1-and-2.service';
import { Child2And3Service } from '../../services/child-2-and-3.service';
import { Child2InComponentService } from '../../services/child-2-in-component.service';
import { Child2InRouteService } from '../../services/child-2-in-route.service';
import { Child2Service } from '../../services/child-2.service';
import { ChildrenSharedInComponentService } from '../../services/children-shared-in-component.service';
import { ChildrenSharedInRouteService } from '../../services/children-shared-in-route.service';
import { ChildrenSharedService } from '../../services/children-shared.service';

@Component({
  selector: 'app-child-2',
  imports: [],
  template: `
    <h2>Child2Component</h2>
    <h3>Services</h3>
    <ul>
      @for (service of services; track service) {
      <li>{{ service.name() }}</li>
      }
    </ul>
  `,
  providers: [Child2InComponentService, ChildrenSharedInComponentService],
})
export class Child2Component {
  services = [
    inject(Child2Service),
    inject(Child1And2Service),
    inject(Child2And3Service),
    inject(ChildrenSharedService),
    inject(Child2InComponentService),
    inject(Child2InRouteService),
    inject(ChildrenSharedInComponentService),
    inject(ChildrenSharedInRouteService),
  ];
}
