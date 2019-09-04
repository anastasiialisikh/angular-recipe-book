import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterValue: string, propName: string): any {
    if (value.length === 0 || filterValue === '') {
      return value;
    }

    const result = [];
    for (const item of value) {
      if (item[propName] === filterValue) {
        result.push(item);
      }
    }

    return result;
  }

}
