import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GalleryModalComponent } from './gallery-modal.component';
import { ButtonModule } from '../button/button.module';
import { InfoBoxModule } from '../info-box/info-box.module';
import { SliderModule } from '../slider/slider.module';
import { SliderNavigationModule } from '../slider-navigation/slider-navigation.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ButtonModule,
    InfoBoxModule,
    SliderModule,
    SliderNavigationModule
  ],
  declarations: [],
})
export class GalleryModalModule { }
