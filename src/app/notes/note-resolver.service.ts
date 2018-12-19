import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, observable } from 'rxjs';
import 'rxjs-compat/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class NoteResolver implements Resolve<boolean> {

  constructor() { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return Observable.of(true);
  }
}
