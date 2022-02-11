import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blankData',
})
export class BlankDataPipe implements PipeTransform {
  transform(data: string): string {
    return data ? data : 'No disponible';
  }
}
