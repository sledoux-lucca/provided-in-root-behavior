import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // {
    //   provide: APP_INITIALIZER,
    //   useValue: () => inject(AppInitService).init(),
    //   multi: true,
    // },
  ],
};
