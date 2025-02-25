import { Component, inject } from '@angular/core';
import { Child2And3Service } from '../../services/child-2-and-3.service';
import { Child3Service } from '../../services/child-3.service';
import { ChildrenProvidedInComponentService } from '../../services/children-provided-in-component.service';
import { ChildrenProvidedInRouteService } from '../../services/children-provided-in-route.service';
import { ChildrenService } from '../../services/children.service';

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
  providers: [ChildrenProvidedInComponentService],
})
export class Child3Component {
  services = [
    inject(Child3Service),
    inject(Child2And3Service),
    inject(ChildrenService),
    inject(ChildrenProvidedInComponentService),
    inject(ChildrenProvidedInRouteService),
  ];
}
