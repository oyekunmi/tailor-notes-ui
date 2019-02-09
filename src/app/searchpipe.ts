import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // retu
    console.log('VALUEEEEEEEE');
    console.log(value)
    if(!value) { return null; }
      if(!args) { return value; }

        args = args.toLowerCase();

        return value.filter(function(item){
            return JSON.stringify(item).toLowerCase().includes(args);
        });
  }

}
