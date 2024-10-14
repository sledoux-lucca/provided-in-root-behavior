import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppWideService {
  name = signal('app-wide-service');

  constructor() {
    console.log('AppWideService instanciated');
  }
}
