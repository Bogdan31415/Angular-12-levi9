import { TestBed } from '@angular/core/testing';

import { BasePostSelfService } from './base-post-self.service';

describe('BasePostSelfService', () => {
  let service: BasePostSelfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasePostSelfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
