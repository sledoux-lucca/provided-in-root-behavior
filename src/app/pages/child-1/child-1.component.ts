import { Component, inject } from '@angular/core';
import { Child1And2Service } from '../../services/child-1-and-2.service';
import { Child1InComponentService } from '../../services/child-1-in-component.service';
import { Child1InRouteService } from '../../services/child-1-in-route.service';
import { Child1Service } from '../../services/child-1.service';
import { ChildrenSharedInComponentService } from '../../services/children-shared-in-component.service';
import { ChildrenSharedInRouteService } from '../../services/children-shared-in-route.service';
import { ChildrenSharedService } from '../../services/children-shared.service';

@Component({
  selector: 'app-child-1',
  imports: [],
  template: `
    <h2>Child1Component</h2>
    <h3>Services</h3>
    <ul>
      @for (service of services; track service) {
      <li>{{ service.name() }}</li>
      }
    </ul>
  `,
  providers: [Child1InComponentService, ChildrenSharedInComponentService],
})
export class Child1Component {
  services = [
    inject(Child1Service),
    inject(Child1And2Service),
    inject(ChildrenSharedService),
    inject(Child1InComponentService),
    inject(Child1InRouteService),
    inject(ChildrenSharedInComponentService),
    inject(ChildrenSharedInRouteService),
  ];
}
