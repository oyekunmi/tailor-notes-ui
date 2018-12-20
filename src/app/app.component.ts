import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ContextService } from './shared';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  template: `
  <!-- <div class="gradient"></div> -->

  <mat-sidenav-container class="example-container">
    <mat-sidenav #sidenav mode="push" ><app-side-nav></app-side-nav></mat-sidenav>
    <mat-sidenav-content>
      <div class="container">
        <app-header></app-header>
        <div class="content">
          <router-outlet></router-outlet>
        </div>
        <footer class="footer">
        </footer>
      </div>
    </mat-sidenav-content>
  </mat-sidenav-container>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'tailor-notes-ui';
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(private appContext: ContextService){
  }

  ngAfterViewInit(){
    this.appContext.sidebarState.subscribe(x=> this.sidenav.toggle() );
  }
}
