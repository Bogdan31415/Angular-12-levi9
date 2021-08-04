import { TestBed } from '@angular/core/testing';

import { BaseUserSelfService } from './base-user-self.service';

describe('BaseUserSelfService', () => {
  let service: BaseUserSelfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseUserSelfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
