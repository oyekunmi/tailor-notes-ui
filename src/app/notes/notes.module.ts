import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';  

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NoteComponent } from './note.component';
import { NoteResolver } from './note-resolver.service';
import { NoteService } from './note.service';

import {
  MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule,
} from '@angular/material';
import { NoteFieldDisplay } from './note-field-display.component';
import { AddNoteComponent } from './add-note.component';
import { NoteFieldWidgetComponent } from './note-field-widget.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';
import { SearchButtonComponent } from '../shared/header/search-button/search-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotesRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    DragDropModule
  ],
  providers: [NoteResolver, NoteService],
  declarations: [NotesComponent, 
    NoteComponent, 
    NoteFieldDisplay, 
    AddNoteComponent, 
    NoteFieldWidgetComponent, 
    HeaderComponent,
    SearchButtonComponent,
  ]
})
export class NotesModule {}
 