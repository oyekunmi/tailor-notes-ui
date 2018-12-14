import { TestBed } from '@angular/core/testing';

import { NoteResolver } from './note-resolver.service';

describe('NoteResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteResolver = TestBed.get(NoteResolver);
    expect(service).toBeTruthy();
  });
});
