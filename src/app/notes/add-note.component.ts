import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ContextService } from '../shared';
import { NoteService } from './note.service';
import { MeasurementClass } from './note.model';


@Component({
  selector: 'app-add-note',
  template: `
  
  <form [formGroup]="form" novalidate (ngSubmit)="save(form)">

    <mat-form-field>
      <input matInput placeholder="Contact Name" formControlName="name">
      <button mat-icon-button matSuffix (click)="addFieldwidget()" type="button"><mat-icon>add_circle</mat-icon></button>
    </mat-form-field>

    <mat-form-field>
      <input matInput placeholder="Phone Number" formControlName="phone">
    </mat-form-field>
    
    <ng-container formArrayName="measures">
        <ng-container *ngFor="let measure of getMeasuresControl().controls; let i=index" [formGroupName]="i">
          <app-note-field-widget 
            [group]="form.controls.measures.controls[i]" 
            [index]="i" 
            (remove)="removeFieldWiget(i)"
            [canRemove]="canRemove()"
            ></app-note-field-widget>
        </ng-container>
    </ng-container>

    
    <mat-form-field>
      <textarea matInput placeholder="Notes" rows="5"  formControlName="others" cdkTextareaAutosize></textarea>
    </mat-form-field>
    
    <button mat-raised-button color="primary" type="submit" [disabled]="!form.valid" color="primary">
      Save Measurement
    </button>

  </form>
  `,
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private appContext: ContextService, 
    private fb: FormBuilder, 
    private noteService: NoteService,
    private router: Router) { }

  ngOnInit() {

    this.appContext.showBackBtn.next(true);
    this.appContext.moduleTitle.next("Add Note");

    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      others: [''],
      measures: this.fb.array([
        this.measureFactory()
      ])
    });
    
  }

  measureFactory(){
    return  this.fb.group({
      name: ['Waist', Validators.required],
      value: [0.00, [Validators.required, Validators.min(0.01)]],
      unit: ['in', Validators.required]
    });
  }

  addFieldwidget() {
    const control = this.getMeasuresControl();
    control.push(this.measureFactory());
    return false;
  }

  removeFieldWiget(i: number) {
    const control = this.getMeasuresControl();
    control.removeAt(i);
  }

  public getMeasuresControl = () => <FormArray>this.form.controls["measures"];


  save(form: any) {
    let model: MeasurementClass = form.value;
    model.id = Date.now().toString();
    this.noteService.addNote(model).subscribe(x=>{
      if(x) this.router.navigateByUrl('notes');
    });
  }

  canRemove(): boolean{
    return this.getMeasuresControl().length > 1;
  }

}
