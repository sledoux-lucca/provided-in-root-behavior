import { Injectable, signal } from '@angular/core';

@Injectable()
export class ChildSpecificService {
  name = signal('child-specific-service');

  constructor() {
    console.log('ChildSpecificService instanciated');
  }
}
