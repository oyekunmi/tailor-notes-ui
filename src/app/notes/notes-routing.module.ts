import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteComponent } from './note.component';
import { NoteResolver } from './note-resolver.service';
import { NotesComponent } from './notes.component';
import { AddNoteComponent } from './add-note.component';

const routes: Routes = [
  {
    path: '',
    component: NotesComponent
  },
  // {
  //   path: ':title',
  //   component: NoteComponent,
  //   resolve: {
  //     note: NoteResolver
  //   }
  // },
  {
    path: 'add',
    component: AddNoteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
