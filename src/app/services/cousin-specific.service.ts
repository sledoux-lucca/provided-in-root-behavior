import { Injectable, signal } from '@angular/core';

@Injectable()
export class CousinSpecificService {
  name = signal('cousin-specific-service');

  constructor() {
    console.log('CousinSpecificService instanciated');
  }
}
