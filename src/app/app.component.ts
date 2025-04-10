import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppAndChild1ProvidedInRouteService } from './services/app-and-child-1-provided-in-route.service';
import { AppWideService } from './services/app-wide.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <h1>{{ title }}</h1>
    <h2>Services</h2>
    <ul>
      @for (service of services; track service) {
      <li>{{ service.name() }}</li>
      }
    </ul>
    <nav class="navbar">
      <a routerLink="" routerLinkActive="active">.</a>
      <a routerLink="/child-1" routerLinkActive="active">Child 1</a>
      <a routerLink="/child-2" routerLinkActive="active">Child 2</a>
      <a routerLink="/child-3" routerLinkActive="active">Child 3</a>
    </nav>
    <router-outlet />
  `,
})
export class AppComponent {
  title = 'provided-in-root-behavior';
  services = [
    inject(AppWideService),
    inject(AppAndChild1ProvidedInRouteService),
  ];
}
