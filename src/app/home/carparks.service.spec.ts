import { TestBed } from '@angular/core/testing';

import { CarparksService } from './carparks.service';

describe('CarparksService', () => {
  let service: CarparksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarparksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
