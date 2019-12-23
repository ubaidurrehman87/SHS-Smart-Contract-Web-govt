import { TestBed } from '@angular/core/testing';

import { SignupApiService } from './signup-api.service';

describe('SignupApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupApiService = TestBed.get(SignupApiService);
    expect(service).toBeTruthy();
  });
});
