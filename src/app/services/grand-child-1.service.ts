import { Injectable } from '@angular/core';
import { ALoggedService } from './abstract-logged.service';

@Injectable({
  providedIn: 'root',
})
export class GrandChild1Service extends ALoggedService {}
