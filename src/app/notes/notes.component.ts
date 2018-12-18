import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Note } from './note.model';
import { NoteService } from './note.service';
import { catchError } from 'rxjs/internal/operators';
import { throwError } from 'rxjs/index';
import { ContextService } from '../shared';

@Component({
  selector: 'app-notes',
  template: `
    <div *ngIf="(notes | async) as notes; else loadingOrError">
      <div class="row"  *ngFor="let note of notes">
        <app-note></app-note>
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

  public notes: Observable<Note[]>;
  public loadingError$ = new Subject<boolean>();

  constructor(private noteService: NoteService, private appContext: ContextService) { }

  ngOnInit() {
    this.appContext.moduleTitle.next("Measurements");
    this.notes = this.noteService.getNotes().pipe(
      catchError((error: any) => {
        this.loadingError$.next(true);
        return throwError(error);
      })
    );
  }

}
