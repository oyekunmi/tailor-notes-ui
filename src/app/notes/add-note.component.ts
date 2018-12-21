import { Component, OnInit } from '@angular/core';
import { ContextService } from '../shared';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MeasurementClass } from './note.model';

@Component({
  selector: 'app-add-note',
  template: `
  
  <p>
    add-note works!
  </p>
  
  <form [formGroup]="form" novalidate (ngSubmit)="save(form)">

    <mat-form-field>
      <input matInput placeholder="Contact Name" formControlName="name">
      <button mat-icon-button matSuffix (click)="addMeasure()"><mat-icon>add_circle</mat-icon></button>
    </mat-form-field>

    <ng-container formArrayName="measures">
        <ng-container *ngFor="let measure of form.controls.measures.controls; let i=index" [formGroupName]="i">
          <app-note-field-widget [group]="form.controls.measures.controls[i]"></app-note-field-widget>
        </ng-container>
    </ng-container>
    
    <div class="controls">
      <button mat-raised-button color="primary" type="submit" [disabled]="!form.valid">Add Contact</button>
    </div>

  </form>
  `,
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  public form: FormGroup;

  constructor(private appContext: ContextService, private fb: FormBuilder) { }

  ngOnInit() {
    this.appContext.showBackBtn.next(true);
    this.form = this.fb.group({
      measures: this.fb.array([
        this.measureFactory()
      ]),
      name: ['', Validators.required]
    });
  }

  measureFactory(){
    return  this.fb.group({
      name: ['', Validators.required],
      value: ['', Validators.required],
      unit: ['', Validators.required]
    });
  }
  
  addMeasure(){
    const control = this._getMeasuresControl();
    control.push(this.measureFactory());
  }

  removeMeasure(i: number){
    const control = this._getMeasuresControl();
    control.removeAt(i);
  }

  private _getMeasuresControl = () => <FormArray> this.form.controls["measures"]; 

  save(model: MeasurementClass) {
    // call API to save customer
    console.log(model);
}

}
