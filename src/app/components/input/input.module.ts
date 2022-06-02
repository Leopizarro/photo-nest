import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [InputComponent],
  exports: [InputComponent]
})
export class InputModule {}

