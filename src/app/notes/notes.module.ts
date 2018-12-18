import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NoteComponent } from './note.component';
import { NoteResolver } from './note-resolver.service';
import { NoteService } from './note.service';

import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatIconModule
  ],
  providers: [NoteResolver, NoteService],
  declarations: [NotesComponent, NoteComponent]
})
export class NotesModule { }
