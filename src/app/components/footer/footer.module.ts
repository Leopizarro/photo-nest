import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RainbowLineModule } from '../rainbow-line/rainbow-line.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {}
