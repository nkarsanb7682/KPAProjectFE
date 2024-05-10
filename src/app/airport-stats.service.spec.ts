import { TestBed } from '@angular/core/testing';

import { AirportStatsService } from './airport-stats.service';

describe('AirportStatsService', () => {
  let service: AirportStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirportStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
