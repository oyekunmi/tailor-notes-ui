import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Note, MeasurementClass } from './note.model';
import { NoteService } from './note.service';
import { catchError, map } from 'rxjs/internal/operators';
import { throwError } from 'rxjs/index';
import { ContextService } from '../shared';

@Component({
  selector: 'app-notes',
  template: `
  <div class="searchNotesContainer">
   <input type="text" placeholder="Search" [(ngModel)] ="searchTerm" class="searchInput">
   </div>
    <aside class="floating-nav" cdkDrag>
      <a href="" routerLink="/notes/add" ><mat-icon>add_circle</mat-icon></a>
    </aside>
    <div class="notes-list" *ngIf="notes; else loadingOrError">
        <app-note *ngFor="let note of notes | searchNotes:searchTerm"
        [note]=note (remove)="onRemove(note)"
        cdkDragLockAxis="x" cdkDrag></app-note>
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
  @ViewChild('searchTerm') searchTerm;
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
