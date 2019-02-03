import { TestBed } from '@angular/core/testing';

import { DelonixstaffService } from './Housekeeping/delonixstaff.service';

describe('DelonixstaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DelonixstaffService = TestBed.get(DelonixstaffService);
    expect(service).toBeTruthy();
  });
});
