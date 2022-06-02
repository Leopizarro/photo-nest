import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PhotocardComponent } from './photocard.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [PhotocardComponent],
  exports: [PhotocardComponent]
})
export class PhotoCardModule {}
