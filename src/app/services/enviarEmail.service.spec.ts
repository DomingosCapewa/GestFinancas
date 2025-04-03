/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EnviarEmailService } from './enviarEmail.service';

describe('Service: EnviarEmail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnviarEmailService]
    });
  });

  it('should ...', inject([EnviarEmailService], (service: EnviarEmailService) => {
    expect(service).toBeTruthy();
  }));
});
