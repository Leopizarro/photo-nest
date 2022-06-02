import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RainbowLineComponent } from './rainbow-line.component';
import { ButtonModule } from '../button/button.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ButtonModule
  ],
  declarations: [RainbowLineComponent],
  exports: [RainbowLineComponent]
})
export class RainbowLineModule {}
