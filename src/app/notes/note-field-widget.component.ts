import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NoteService } from './note.service';
import { Unit } from './note.model';

@Component({
  selector: 'app-note-field-widget',
  template: `
  <div [formGroup]="measureForm" class="container">
    <mat-form-field>
      <mat-select placeholder="Body Part" formControlName="name">
        <mat-option *ngFor="let part of parts" [value]="part">{{part}}</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field>
      <mat-select placeholder="Unit" formControlName="unit">
        <mat-option *ngFor="let unit of units" [value]="unit.id">{{unit.name}}</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field>
      <input matInput placeholder="Value" type="number" class="right-align"  formControlName="value">
      <!--<span matPrefix>$&nbsp;</span>-->
      <span matSuffix> &nbsp; {{ measureForm.get('unit').value }}</span>
    </mat-form-field>

    <button mat-button type="button">Remove</button>

  </div>
  `,
  styles: [`
    :host{
      
      
    }
    .container {
      display: flex;
      flex-direction: column;
    }
    .right-align{
      text-align: right;
    }
  `]
})
export class NoteFieldWidgetComponent implements OnInit {

  @Input('group') measureForm: FormGroup;
  @Input() index: number;

  parts: Array<string>;
  units: Array<Unit>;
  
  constructor(private service: NoteService) {
    this.parts = this.service.standardMeasureNames();
    this.units = this.service.standardUnits();
   }

  ngOnInit() {
  }

  removeMeasure(index){

  }

}
