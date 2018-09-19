import { TestBed } from '@angular/core/testing';

import { ShopliftrService } from './shopliftr.service';

describe('ShopliftrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopliftrService = TestBed.get(ShopliftrService);
    expect(service).toBeTruthy();
  });
});
