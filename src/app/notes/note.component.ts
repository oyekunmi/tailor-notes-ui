import { Component, OnInit, Input } from '@angular/core';
import { Note } from './note.model';

@Component({ 
  selector: 'app-note',
  template: `
    <article class="note-teaser">
      <div class="note-image">
        <mat-icon>person_pin</mat-icon>
      </div>
      <div class="note-content">
        <div class="note-ttle"> {{note.name}} </div>
        <div class="note-summary"> some text here </div>

        <div class="note-full">
          Full note information
        </div>

      </div>
    </article>
  `,
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;

  constructor() { }

  ngOnInit() {

  }

}