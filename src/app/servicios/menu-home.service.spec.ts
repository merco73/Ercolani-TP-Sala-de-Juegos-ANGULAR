import { TestBed } from '@angular/core/testing';

import { MenuHomeService } from './menu-home.service';

describe('MenuHomeService', () => {
  let service: MenuHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
