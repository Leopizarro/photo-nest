import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoGalleryPage } from './photogallery.page';
import { ImageGridModule } from 'src/app/components/image-grid/image-grid.module';
import { SliderModule } from 'src/app/components/slider/slider.module';
import { RainbowLineModule } from 'src/app/components/rainbow-line/rainbow-line.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageGridModule,
    SliderModule,
    RainbowLineModule,
    FooterModule
  ],
  declarations: [PhotoGalleryPage]
})
export class PhotoGalleryPageModule {}
