import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesizePipe } from './filesize.pipe';
import { BlankDataPipe } from './blank-data.pipe';

@NgModule({
  declarations: [FilesizePipe, BlankDataPipe],
  imports: [CommonModule],
  exports: [FilesizePipe, BlankDataPipe],
})
export class PipesModule {}
