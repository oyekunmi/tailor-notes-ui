import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFieldWidgetComponent } from './note-field-widget.component';

describe('NoteFieldWidgetComponent', () => {
  let component: NoteFieldWidgetComponent;
  let fixture: ComponentFixture<NoteFieldWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFieldWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFieldWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
