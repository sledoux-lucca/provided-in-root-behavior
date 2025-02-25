import { Component, inject } from '@angular/core';
import { Child1And2Service } from '../../services/child-1-and-2.service';
import { Child1ProvidedInComponentService } from '../../services/child-1-provided-in-component.service';
import { Child1ProvidedInRouteService } from '../../services/child-1-provided-in-route.service';
import { Child1Service } from '../../services/child-1.service';
import { ChildrenProvidedInComponentService } from '../../services/children-provided-in-component.service';
import { ChildrenProvidedInRouteService } from '../../services/children-provided-in-route.service';
import { ChildrenService } from '../../services/children.service';

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
    Child1ProvidedInComponentService,
    ChildrenProvidedInComponentService,
  ],
})
export class Child1Component {
  services = [
    inject(Child1Service),
    inject(Child1And2Service),
    inject(ChildrenService),
    inject(Child1ProvidedInComponentService),
    inject(Child1ProvidedInRouteService),
    inject(ChildrenProvidedInComponentService),
    inject(ChildrenProvidedInRouteService),
  ];
}
