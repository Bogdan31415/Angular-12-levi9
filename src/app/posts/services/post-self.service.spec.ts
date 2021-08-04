import { TestBed } from '@angular/core/testing';

import { PostSelfService } from './post-self.service';

describe('PostSelfService', () => {
  let service: PostSelfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostSelfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
