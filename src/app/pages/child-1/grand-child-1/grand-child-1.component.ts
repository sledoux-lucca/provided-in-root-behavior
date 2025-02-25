import { Component, inject } from '@angular/core';
import { ChildrenProvidedInComponentService } from '../../../services/children-provided-in-component.service';
import { ChildrenProvidedInRouteService } from '../../../services/children-provided-in-route.service';
import { ChildrenService } from '../../../services/children.service';
import { GrandChild1Service } from '../../../services/grand-child-1.service';

@Component({
  selector: 'app-grand-child-1',
  imports: [],
  template: `
    <h2>GrandChild1Component</h2>
    <h3>Services</h3>
    <ul>
      @for (service of services; track service) {
      <li>{{ service.name() }}</li>
      }
    </ul>
  `,
  providers: [ChildrenProvidedInComponentService],
})
export class GrandChild1Component {
  services = [
    inject(GrandChild1Service),
    inject(ChildrenService),
    inject(ChildrenProvidedInComponentService),
    inject(ChildrenProvidedInRouteService),
  ];
}
