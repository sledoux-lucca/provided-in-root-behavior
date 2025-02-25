import { Injectable } from '@angular/core';
import { ALoggedService } from './abstract-logged.service';

@Injectable({
  providedIn: 'root',
})
export class Child2And3Service extends ALoggedService {}
