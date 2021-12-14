import { TestBed } from '@angular/core/testing';

import { CustomerEngagementService } from './customer-engagement.service';

describe('CustomerEngagementService', () => {
  let service: CustomerEngagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerEngagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
