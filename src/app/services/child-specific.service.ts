import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChildSpecificService {
  name = signal('child-specific-service');

  constructor() {
    console.log('ChildSpecificService instanciated');
  }
}
