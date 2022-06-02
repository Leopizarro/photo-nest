import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal.component';
import { ButtonModule } from '../button/button.module';
import { InfoBoxModule } from '../info-box/info-box.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ButtonModule,
    InfoBoxModule
  ],
  declarations: [ModalComponent],
})
export class ModalModule { }
