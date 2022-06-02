import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PhotoCardModule } from '../photocard/photocard.module';
import { ImageGridComponent } from './image-grid.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PhotoCardModule
  ],
  declarations: [ImageGridComponent],
  exports: [ImageGridComponent]
})
export class ImageGridModule { }
