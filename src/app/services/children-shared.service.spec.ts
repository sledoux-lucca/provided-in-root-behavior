import { TestBed } from '@angular/core/testing';

import { ChildrenSharedService } from './children-shared.service';

describe('ChildrenSharedService', () => {
  let service: ChildrenSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildrenSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
