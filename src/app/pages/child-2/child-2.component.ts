import { Component, inject } from '@angular/core';
import { Child1And2Service } from '../../services/child-1-and-2.service';
import { Child2And3Service } from '../../services/child-2-and-3.service';
import { Child2ProvidedInComponentService } from '../../services/child-2-provided-in-component.service';
import { Child2ProvidedInRouteService } from '../../services/child-2-provided-in-route.service';
import { Child2Service } from '../../services/child-2.service';
import { ChildrenProvidedInComponentService } from '../../services/children-provided-in-component.service';
import { ChildrenProvidedInRouteService } from '../../services/children-provided-in-route.service';
import { ChildrenService } from '../../services/children.service';

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
    Child2ProvidedInComponentService,
    ChildrenProvidedInComponentService,
  ],
})
export class Child2Component {
  services = [
    inject(Child2Service),
    inject(Child1And2Service),
    inject(Child2And3Service),
    inject(ChildrenService),
    inject(Child2ProvidedInComponentService),
    inject(Child2ProvidedInRouteService),
    inject(ChildrenProvidedInComponentService),
    inject(ChildrenProvidedInRouteService),
  ];
}
