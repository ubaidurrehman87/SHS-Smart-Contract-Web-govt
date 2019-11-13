import { TestBed } from '@angular/core/testing';

import { OnwerApiService } from './onwer-api.service';

describe('OnwerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnwerApiService = TestBed.get(OnwerApiService);
    expect(service).toBeTruthy();
  });
});
