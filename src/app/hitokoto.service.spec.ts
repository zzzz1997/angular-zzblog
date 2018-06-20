import { TestBed, inject } from '@angular/core/testing';

import { HitokotoService } from './hitokoto.service';

describe('HitokotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HitokotoService]
    });
  });

  it('should be created', inject([HitokotoService], (service: HitokotoService) => {
    expect(service).toBeTruthy();
  }));
});
