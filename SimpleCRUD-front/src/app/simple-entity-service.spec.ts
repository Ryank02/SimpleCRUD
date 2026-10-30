import { TestBed } from '@angular/core/testing';
import { SimpleEntityService } from './simple-entity-service';

describe('SimpleEntityService', () => {
  let service: SimpleEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
