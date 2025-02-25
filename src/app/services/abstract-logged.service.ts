import { signal } from '@angular/core';

export abstract class ALoggedService {
  name = signal(this.constructor.name);

  constructor() {
    console.log(`Contructor of ${this.constructor.name}`);
  }
}
