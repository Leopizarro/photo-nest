import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InfoBoxComponent } from './info-box.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [InfoBoxComponent],
  exports: [InfoBoxComponent]
})
export class InfoBoxModule { }
