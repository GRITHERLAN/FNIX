import { TestBed } from '@angular/core/testing';

import { ApiHTTP } from './api-http';

describe('ApiHTTP', () => {
  let service: ApiHTTP;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHTTP);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
