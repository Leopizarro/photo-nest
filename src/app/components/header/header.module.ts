import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { ButtonModule } from '../button/button.module';
import { RainbowLineModule } from '../rainbow-line/rainbow-line.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ButtonModule,
    RainbowLineModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
