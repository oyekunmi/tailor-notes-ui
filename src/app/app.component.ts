import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="blur"></div>
    <div class="container">
      <app-header></app-header>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
      <div class="footer">
        <!-- Footer -->
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tailor-notes-ui';
}
