/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenServiceService } from './TokenService.service';

describe('Service: TokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenServiceService]
    });
  });

  it('should ...', inject([TokenServiceService], (service: TokenServiceService) => {
    expect(service).toBeTruthy();
  }));
});
