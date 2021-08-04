import { TestBed } from '@angular/core/testing';

import { ActivatedUserSelfService } from './activated-user-self.service';

describe('ActivatedUserSelfService', () => {
  let service: ActivatedUserSelfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivatedUserSelfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
