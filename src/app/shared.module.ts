import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchNotesPipe } from './search-notes.pipe';

@NgModule({
  declarations: [SearchNotesPipe],
  exports: [SearchNotesPipe, CommonModule]
})

export class SharedModule {}
