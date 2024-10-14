import { TestBed } from '@angular/core/testing';

import { ChildSpecificService } from './child-specific.service';

describe('ChildSpecificService', () => {
  let service: ChildSpecificService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildSpecificService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
