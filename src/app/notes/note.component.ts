import { Component, OnInit, Input } from '@angular/core';
import { MeasurementClass, Measure } from './note.model';

@Component({ 
  selector: 'app-note',
  template: `
    <article class="note-teaser">
      <div class="note-image">
        <mat-icon>person_pin</mat-icon>
      </div>
      <div class="note-content">
        <div class="note-ttle"> {{note.name}} </div>
        <div class="note-summary">
          <div class="field" *ngFor="let item of summaryItems">
            <label> {{item.name | titlecase }}: </label>
            <span> {{item.value}} {{ item.unit.id }} </span>
          </div>
        </div>

        <!--
        <div class="note-full" *ngIf="show">
          Full note information
        </div>
        -->

      </div>
    </article>
  `,
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: MeasurementClass;
  summaryItems: Measure[];

  constructor() { 
  }

  ngOnInit() {
    this.summaryItems = this.note.measures.filter((x,i)=>i<3);
  }

  
}