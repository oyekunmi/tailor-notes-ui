import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/internal/operators';
import { Note, MeasurementClass, Unit } from './note.model';

@Injectable()
export class NoteService {

  notes: MeasurementClass[];

  constructor() { }

  public getNotes(count?: number): Observable<MeasurementClass[]> {
    if (localStorage.getItem('notes') === null) {
      this.notes = [];
    } else {
      this.notes = JSON.parse(localStorage.getItem('notes'));
    }
    return Observable.of(this.notes).pipe(
      map(data => data.filter((item) => item.id !== '')),
      catchError(this.handleError('getNotes'))
    ) as Observable<MeasurementClass[]>;
  }


  public addNote(note: MeasurementClass) {
    if (note) {
      this.notes.push(note);
      let notes = [];
      if (localStorage.getItem('notes') === null) {
        notes = [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
      } else {
        notes = JSON.parse(localStorage.getItem('notes'));
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
      }
    } else {
      catchError(this.handleError('addNote'));
    }
  }

  public deleteNote(note: MeasurementClass) {
    for (let i = 0; i < this.notes.length; i++) {
      if (note == this.notes[i]) {
        this.notes.splice(i, 1);
        localStorage.setItem('notes', JSON.stringify(this.notes));
      }
    }
  }


  private handleError = (operation: string = 'operation') =>
    (error: any) => {
      error.operation = operation;
      return throwError(error);
    };

  public standardMeasureNames = (): Array<string> => [
    'Waist',
    'Bust',
    'Hips',
    'Shoulder',
    'Half Length',
    'Full Length',
    'Half waist',
    'Sleeve',
    'Round Sleeve'
  ];

  public standardUnits = (): Array<Unit> => [
    { id: 'in', name: 'Inches' },
    { id: 'cm', name: 'Centimeters' },
    { id: 'ft', name: 'Feets' },
  ];


}
