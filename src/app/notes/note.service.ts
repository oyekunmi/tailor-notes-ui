import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/internal/operators';
import { Note, MeasurementClass } from './note.model';

@Injectable()
export class NoteService {

  constructor() { }

  public getNotes(count?: number): Observable<Note[]>{

    const measures = [
      { id: "shams", name: "Oyesola Ogundele", height: 8},
      { id: "ascbhsdj", name: "Ajani Akeem", height: 7},
      { id: "axvdtt", name: "Lateefah Raheem", height: 6},
    ]

    // return Observable.of(measures);
    return Observable.of(measures).pipe(
      map( data =>  data.filter((item) => item.id !== '') ),
      catchError( this.handleError('getNotes') )
   ) as Observable<Note[]>;
  }

  private handleError(operation: string = 'operation') {
    return (error: any) => {
      error.operation = operation;
      return throwError(error);
    };
  }
}
