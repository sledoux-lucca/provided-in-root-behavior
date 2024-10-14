import { TestBed } from '@angular/core/testing';

import { CousinSpecificService } from './cousin-specific.service';

describe('CousinSpecificService', () => {
  let service: CousinSpecificService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CousinSpecificService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
