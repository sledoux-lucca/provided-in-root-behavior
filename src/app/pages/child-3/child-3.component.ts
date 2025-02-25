import { Component, inject } from '@angular/core';
import { Child2And3Service } from '../../services/child-2-and-3.service';
import { Child3Service } from '../../services/child-3.service';
import { ChildrenSharedInComponentService } from '../../services/children-shared-in-component.service';
import { ChildrenSharedInRouteService } from '../../services/children-shared-in-route.service';
import { ChildrenSharedService } from '../../services/children-shared.service';

@Component({
  selector: 'app-child-3',
  imports: [],
  template: `
    <h2>Child3Component</h2>
    <h3>Services</h3>
    <ul>
      @for (service of services; track service) {
      <li>{{ service.name() }}</li>
      }
    </ul>
  `,
  providers: [ChildrenSharedInComponentService],
})
export class Child3Component {
  services = [
    inject(Child3Service),
    inject(Child2And3Service),
    inject(ChildrenSharedService),
    inject(ChildrenSharedInComponentService),
    inject(ChildrenSharedInRouteService),
  ];
}
