import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
})
export class FilesizePipe implements PipeTransform {
  transform(size: number) {
    console.log(size);
    return (size / (1024 * 1024)).toFixed(2) + ' mb';
  }
}