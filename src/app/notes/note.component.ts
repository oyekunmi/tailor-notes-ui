import { NoteService } from './note.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MeasurementClass, Measure, Note } from './note.model';

@Component({ 
  selector: 'app-note',
  template: `
    <article class="note-teaser" (click)="toggleTeaser()" (swipeleft)="onDelete($event)">

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
  @Output() remove:EventEmitter<MeasurementClass> = new EventEmitter();

  summaryItems: Measure[];
  showFull: boolean;

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.summaryItems = this.note.measures.filter((x,i)=>i<3);
    this.showFull = false;
  }

  toggleTeaser(){
    this.showFull = !this.showFull;
  }

  onDelete($event){
    this.remove.emit(this.note);
  }

  
}