import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/internal/operators';
import { Note, MeasurementClass } from './note.model';

@Injectable()
export class NoteService {

  constructor() { }

  public getNotes(count?: number): Observable<MeasurementClass[]>{

    const measures = [
      { id: "shams", name: "Oyesola Ogundele", measures: [ {name: 'height', value: 10, unit: { id: 'in', name: 'inches'}}]},
      { id: "ascbhsdj", name: "Ajani Akeem", measures: [ {name: 'height', value: 10, unit: { id: 'in', name: 'inches'}}]},
      { id: "axvdtt", name: "Lateefah Raheem", measures: [ 
        {name: 'height', value: 10, unit: { id: 'in', name: 'inches'}},
        {name: 'waist', value: 32, unit: { id: 'in', name: 'inches'}},
        {name: 'Half wast', value: 20, unit: { id: 'in', name: 'inches'}},
      ]},
      { id: "axvdtt", name: "Lateefah Raheem", measures: [ 
        {name: 'height', value: 10, unit: { id: 'in', name: 'inches'}},
        {name: 'waist', value: 32, unit: { id: 'in', name: 'inches'}},
        {name: 'Half wast', value: 20, unit: { id: 'in', name: 'inches'}},
      ]},
      { id: "axvdtt", name: "Lateefah Raheem", measures: [ 
        {name: 'height', value: 10, unit: { id: 'in', name: 'inches'}},
        {name: 'waist', value: 32, unit: { id: 'in', name: 'inches'}},
        {name: 'Half wast', value: 20, unit: { id: 'in', name: 'inches'}},
      ]},
      { id: "axvdtt", name: "Lateefah Raheem", measures: [ 
        {name: 'height', value: 10, unit: { id: 'in', name: 'inches'}},
        {name: 'waist', value: 32, unit: { id: 'in', name: 'inches'}},
        {name: 'Half wast', value: 20, unit: { id: 'in', name: 'inches'}},
      ]},
      { id: "shams", name: "Oyesola Ogundele", measures: [ 
        {name: 'height', value: 10, unit: { id: 'in', name: 'inches'}}
      ]},
      { id: "ascbhsdj", name: "Ajani Akeem", measures: [
        {name: 'height', value: 10, unit: { id: 'in', name: 'inches'}}
      ]},
      { id: "axvdtt", name: "Eze Emanuel", measures: [ 
        {name: 'height', value: 10, unit: { id: 'in', name: 'inches'}},
        {name: 'waist', value: 32, unit: { id: 'in', name: 'inches'}},
        {name: 'Half wast', value: 20, unit: { id: 'in', name: 'inches'}},
      ]},
      { id: "axvdtt", name: "Obiakor Chizaram", measures: [ 
        {name: 'height', value: 10, unit: { id: 'in', name: 'inches'}},
        {name: 'waist', value: 32, unit: { id: 'in', name: 'inches'}},
        {name: 'Half wast', value: 20, unit: { id: 'in', name: 'inches'}},
      ]},
    ]

    // return Observable.of(measures);
    return Observable.of(measures).pipe(
      map( data =>  data.filter((item) => item.id !== '') ),
      catchError( this.handleError('getNotes') )
   ) as Observable<MeasurementClass[]>;
  }

  private handleError(operation: string = 'operation') {
    return (error: any) => {
      error.operation = operation;
      return throwError(error);
    };
  }
}
