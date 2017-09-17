import { TestBed, inject } from '@angular/core/testing';

import { WebLoaderService } from './web-loader.service';

describe('WebLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebLoaderService]
    });
  });

  it('should be created', inject([WebLoaderService], (service: WebLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
