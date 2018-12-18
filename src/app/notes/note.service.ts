import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/internal/operators';
import { Note } from './note.model';

@Injectable()
export class NoteService {

  constructor() { }

  public getNotes(count?: number): Observable<Note[]>{

    const notes = [
      { id: "shams", name: "Oyesola Ogundele", height: 8, waist: 10},
      { id: "ascbhsdj", name: "Ajani Akeem", height: 7, waist: 20},
      { id: "axvdtt", name: "Lateefah Raheem", height: 6, waist: 32},
    ]

    // const notes = new
    // return Observable.throw(notes);
    return Observable.of(notes).pipe(
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
