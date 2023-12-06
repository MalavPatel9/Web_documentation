import { TestBed } from '@angular/core/testing';

import { AddsetService } from './addset.service';

describe('AddsetService', () => {
  let service: AddsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
