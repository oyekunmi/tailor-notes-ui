import { TestBed } from '@angular/core/testing';
import { ContextService } from './context.service';
import { Subscription } from 'rxjs';

describe('ContextService', () => {
  let service: ContextService;
  let s$: Subscription;

  beforeEach( () => {
    TestBed.configureTestingModule({
      providers: [ ContextService ]
    });
    service = TestBed.get(ContextService);
  });

});
