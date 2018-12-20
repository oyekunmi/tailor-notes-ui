import { Component, OnInit } from '@angular/core';
import { ContextService } from '../shared';

@Component({
  selector: 'app-add-note',
  template: `
    <p>
      add-note works!
    </p>
  `,
  styles: []
})
export class AddNoteComponent implements OnInit {

  constructor(private appContext: ContextService) { }

  ngOnInit() {
    this.appContext.showBackBtn.next(true);
  }

}
