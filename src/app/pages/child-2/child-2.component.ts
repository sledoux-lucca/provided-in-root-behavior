import { Component, inject } from '@angular/core';
import { Child2SpecificInComponentService } from '../../services/child-2-specific-in-component.service';
import { Child2SpecificInRouteService } from '../../services/child-2-specific-in-route.service';
import { Child2SpecificService } from '../../services/child-2-specific.service';
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
  providers: [
    Child2SpecificInComponentService,
    ChildrenSharedInComponentService,
  ],
})
export class Child2Component {
  services = [
    inject(Child2SpecificService),
    inject(ChildrenSharedService),
    inject(Child2SpecificInComponentService),
    inject(Child2SpecificInRouteService),
    inject(ChildrenSharedInComponentService),
    inject(ChildrenSharedInRouteService),
  ];
}
