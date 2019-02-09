import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNotes'
})
export class SearchNotesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) { return null; }
      if (!args) { return value; }

        args = args.toLowerCase();

        return value.filter(function(item) {
            return item.name.toLowerCase().indexOf(args) !== -1;
        });
  }

}

