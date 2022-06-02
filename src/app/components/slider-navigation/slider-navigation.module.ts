import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SliderNavigationComponent } from './slider-navigation.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [SliderNavigationComponent],
  exports: [SliderNavigationComponent]
})
export class SliderNavigationModule {}
