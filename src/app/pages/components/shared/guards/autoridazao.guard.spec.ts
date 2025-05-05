import { TestBed } from '@angular/core/testing';

import { AutoridazaoGuard } from './autoridazao.guard';

describe('AutoridazaoGuard', () => {
  let guard: AutoridazaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutoridazaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
