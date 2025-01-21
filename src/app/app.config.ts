import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Optional for performance optimization
    provideRouter(routes), // Use routes defined in app.routes.ts
    importProvidersFrom(StoreModule.forRoot(reducers)),
  ],
};
