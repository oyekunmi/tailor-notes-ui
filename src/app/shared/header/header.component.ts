import { Component, OnInit } from '@angular/core';
import { ContextService } from '../context.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  template: `

  <div id="page-header">

    <div class="first-row row">
     
      <a mat-icon-button class="menu-toggle item" (click)="toggleNav()">
        <mat-icon >reorder</mat-icon>
      </a>
  
      <div class="logo item">
        T
      </div>

      <div class="search item">

        <!--
        <a mat-icon-button class="menu-toggle">
          <mat-icon>settings</mat-icon>
        </a>
        -->

        <a mat-icon-button class="menu-toggle">
          <mat-icon >settings</mat-icon>
        </a>
       
      </div>
    </div>
    <!-- <div class="second-row row"> content</div> -->
  </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title$: Subject<string> = this.appContext.moduleTitle;
  constructor(private appContext: ContextService) {}

  ngOnInit() {

  }

  toggleNav(){
    this.appContext.sidebarState.next(true);
  }

}
