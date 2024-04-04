import {  TestBed } from '@angular/core/testing';

import {YouCanDisableGuard} from "./you-can-disable.guard";

describe('YouCanDisableGuard', () => {
  let guard: YouCanDisableGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(YouCanDisableGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
