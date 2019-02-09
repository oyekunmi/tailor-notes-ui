import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Note, MeasurementClass } from './note.model';
import { NoteService } from './note.service';
import { catchError, map } from 'rxjs/internal/operators';
import { throwError } from 'rxjs/index';
import { ContextService } from '../shared';

@Component({
  selector: 'app-notes',
  template: `
    <!-- <aside class="floating-nav" cdkDrag>
      <a href="" routerLink="/notes/add" ><mat-icon>add_circle</mat-icon></a>
    </aside> -->

   <!-- <div class="notes-list" *ngIf="notes; else loadingOrError">
        <app-note *ngFor="let note of notes" [note]=note (remove)="onRemove(note)" cdkDragLockAxis="x" cdkDrag></app-note>
    </div> -->
    <app-header>
    <app-search-button></app-search-button>
    </app-header>

    <div class="note-list">
      <div class="customers-detail">
      <img src="../../assets/images/icons8_Male_User_64px.png" alt="Customers image">
      <div class="name-and-phone">
      <span>JOHNY DEPP</span>
      <span>08025259919  |   02/01/2019</span>
      </div>
      </div>
      <div class="customers-expectation"><strong>Design Style:</strong> Agbada | <strong>
       Material Length:</strong> 6 yards | <strong>Service Charges:</strong> 5,000 | <strong>Delivery Date:</strong> 10/01/2019</div>
      <div class="customer-actions">
       <div>
       <img src="../../assets/images/icons8_Phone_50px.png" alt="phone icon">
       <img src="../../assets/images/icons8_Edit_64px.png" alt="edit icon">
       <img src="../../assets/images/icons8_Trash_52px_1.png" alt="delete icon">
       </div>
      </div>
    </div>
      
    <ng-template #loadingOrError>
      <div class="error-plate" *ngIf="loadingError$ | async; else loading">
        <mat-icon>warning</mat-icon>
        <span>Error loading. Please try again later.</span>
      </div>

      <ng-template class="gl-loading showLoading" #loading>
        <div class="spinner"></div>
      </ng-template>
    </ng-template>
  `,
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  public notes$: Subscription;
  public notes: MeasurementClass[];
  public loadingError$ = new Subject<boolean>();

  constructor(private noteService: NoteService, private appContext: ContextService) { }

  ngOnInit() {

    this.appContext.moduleTitle.next("Measurements");
    this.appContext.showBackBtn.next(false);

    this.notes$ = this.noteService.getNotes().subscribe( data => {
      this.notes = data;
    } ),
    catchError((error: any) => {
      this.loadingError$.next(true);
      return throwError(error);
    } );

  }

  onRemove(note){
    this.notes = this.notes.filter( x => x !== note );
    this.noteService.deleteNote(note);
    console.log('swipped');
  }


}
