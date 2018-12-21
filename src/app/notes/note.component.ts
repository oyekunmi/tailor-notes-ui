import { Component, OnInit, Input } from '@angular/core';
import { MeasurementClass, Measure } from './note.model';

@Component({ 
  selector: 'app-note',
  template: `
    <article class="note-teaser" (click)="toggleTeaser()">
      <div class="note-image">
        <mat-icon>person_pin</mat-icon>
      </div>
      <div class="note-content">
        <div class="note-ttle"> {{note.name}} </div>

        <div class="note-summary"  *ngIf="!showFull">
          <note-field-display *ngFor="let item of summaryItems" [noteField]="item"></note-field-display>
        </div>

        <div class="note-full" *ngIf="showFull">
          <note-field-display *ngFor="let item of note.measures" [noteField]="item"></note-field-display>
        </div>

      </div>
    </article>
  `,
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
 
  @Input() note: MeasurementClass;
  summaryItems: Measure[];
  showFull: boolean;

  constructor() {}

  ngOnInit() {
    this.summaryItems = this.note.measures.filter((x,i)=>i<3);
    this.showFull = false;
  }

  toggleTeaser(){
    this.showFull = !this.showFull;
  }

  
}