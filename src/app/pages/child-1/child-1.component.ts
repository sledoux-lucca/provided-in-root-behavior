import { Component, inject } from '@angular/core';
import { Child1SpecificInComponentService } from '../../services/child-1-specific-in-component.service';
import { Child1SpecificInRouteService } from '../../services/child-1-specific-in-route.service';
import { Child1SpecificService } from '../../services/child-1-specific.service';
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
  providers: [
    Child1SpecificInComponentService,
    ChildrenSharedInComponentService,
  ],
})
export class Child1Component {
  services = [
    inject(Child1SpecificService),
    inject(ChildrenSharedService),
    inject(Child1SpecificInComponentService),
    inject(Child1SpecificInRouteService),
    inject(ChildrenSharedInComponentService),
    inject(ChildrenSharedInRouteService),
  ];
}
