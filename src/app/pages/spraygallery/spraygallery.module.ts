import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SprayGalleryPage } from './spraygallery.page';
import { SliderModule } from 'src/app/components/slider/slider.module';
import { PhotoCardModule } from 'src/app/components/photocard/photocard.module';
import { ImageGridModule } from 'src/app/components/image-grid/image-grid.module';
import { RainbowLineModule } from 'src/app/components/rainbow-line/rainbow-line.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderModule,
    PhotoCardModule,
    ImageGridModule,
    RainbowLineModule,
    FooterModule
  ],
  declarations: [SprayGalleryPage]
})
export class SprayGalleryPageModule {}
