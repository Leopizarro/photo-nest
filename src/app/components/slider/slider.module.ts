import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { ButtonModule } from '../button/button.module';
import { SliderNavigationModule } from '../slider-navigation/slider-navigation.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ButtonModule,
    SliderNavigationModule,
  ],
  declarations: [SliderComponent],
  exports: [SliderComponent]
})
export class SliderModule {}
