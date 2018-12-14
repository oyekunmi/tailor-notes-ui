import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NoteComponent } from './note.component';
import { NoteResolver } from './note-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule
  ],
  providers: [NoteResolver],
  declarations: [NotesComponent, NoteComponent]
  //entryComponents: [NotesComponent]
})
export class NotesModule { }
