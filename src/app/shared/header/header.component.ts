import { Component, OnInit } from '@angular/core';
import { ContextService } from '../context.service';
import { Subject } from 'rxjs';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  template: `

  <div id="page-header">

    <div class="first-row row">
      
      <div class="item" *ngIf="showBackBtn$ | async">
        <a mat-icon-button class="menu-toggle" (click)="toggleNav()">
          <!-- <mat-icon >reorder</mat-icon> -->
        </a>

        <a mat-icon-button class="menu-toggle" (click)="goBack()" >
          <mat-icon>arrow_back</mat-icon>
        </a>

      </div>
  
      <div class="logo item">
        T
      </div>

      <div class="search item">

        <a mat-icon-button class="menu-toggle"  (click)="toggleNav()">
          <mat-icon >settings</mat-icon>
        </a>
       
      </div>
    </div>

  </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  public title$: Subject<string> = this.appContext.moduleTitle;
  public showBackBtn$: Subject<boolean> = this.appContext.showBackBtn;

  constructor(private appContext: ContextService, private location: Location, private router: Router) {}

  toggleNav(){
    this.appContext.sidebarState.next(true);
  }

  goBack(){
    // this.location.back(); @TODO: Make this work on cordova
    this.router.navigateByUrl("notes");
  }

}
