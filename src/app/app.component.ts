import { Component, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ContextService } from './shared';
import { MatSidenav } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <!-- <div class="gradient"></div> -->
  <mat-sidenav-container class="example-container">
    <mat-sidenav #sidenav mode="push" ><app-side-nav></app-side-nav></mat-sidenav>
    <mat-sidenav-content>
      <div class="container">
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
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'tailor-notes-ui';
  sideBarStateSubsription: Subscription;
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(private appContext: ContextService){
  }

  ngAfterViewInit() {
    this.sideBarStateSubsription = this.appContext.sidebarState.subscribe(x=> this.sidenav.toggle() );
  }
  ngOnDestroy() {
    this.sideBarStateSubsription.unsubscribe();
  }
}
