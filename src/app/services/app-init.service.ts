import { Injectable } from '@angular/core';
import { ALoggedService } from './abstract-logged.service';

@Injectable({
  providedIn: 'root',
})
export class AppInitService extends ALoggedService {
  init(): void {
    console.log('AppInitService initialized');
  }
}
