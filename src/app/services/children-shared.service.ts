import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChildrenSharedService {
  name = signal('children-shared-service');

  constructor() {
    console.log('ChildrenSharedService instanciated');
  }
}
