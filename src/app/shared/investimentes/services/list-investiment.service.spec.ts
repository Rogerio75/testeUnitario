import { TestBed } from '@angular/core/testing';

import { ListInvestimentService } from './list-investiment.service';

describe('ListInvestimentService', () => {
  let service: ListInvestimentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListInvestimentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
