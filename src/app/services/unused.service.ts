import { Injectable } from '@angular/core';
import { ALoggedService } from './abstract-logged.service';

/**
 * Unused service : not used in the application, absent from build output
 */
@Injectable({
  providedIn: 'root',
})
export class UnusedService extends ALoggedService {}
