import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NoteComponent } from './note.component';
import { NoteResolver } from './note-resolver.service';
import { NoteService } from './note.service';

import {
  MatIconModule,
} from '@angular/material';
import { NoteFieldDisplay } from './note-field-display.component';
import { AddNoteComponent } from './add-note.component';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatIconModule
  ],
  providers: [NoteResolver, NoteService],
  declarations: [NotesComponent, NoteComponent, NoteFieldDisplay, AddNoteComponent]
})
export class NotesModule {}
 