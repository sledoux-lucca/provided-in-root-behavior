import { Component, inject } from '@angular/core';
import { ChildrenProvidedInComponentService } from '../../../services/children-provided-in-component.service';
import { ChildrenProvidedInRouteService } from '../../../services/children-provided-in-route.service';
import { ChildrenService } from '../../../services/children.service';
import { GrandChild2Service } from '../../../services/grand-child-2.service';
import { GrandChildrenService } from '../../../services/grand-children.service';

@Component({
  selector: 'app-grand-child-2',
  imports: [],
  template: `
    <h2>GrandChild2Component</h2>
    <h3>Services</h3>
    <ul>
      @for (service of services; track service) {
      <li>{{ service.name() }}</li>
      }
    </ul>
  `,
  providers: [ChildrenProvidedInComponentService],
})
export class GrandChild2Component {
  services = [
    inject(GrandChild2Service),
    inject(GrandChildrenService),
    inject(ChildrenService),
    inject(ChildrenProvidedInComponentService),
    inject(ChildrenProvidedInRouteService),
  ];
}
