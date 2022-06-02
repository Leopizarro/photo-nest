import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewpostPage } from './newpost.page';
import { ButtonModule } from 'src/app/components/button/button.module';
import { InputModule } from 'src/app/components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ButtonModule,
    InputModule
  ],
  declarations: [NewpostPage]
})
export class NewpostPageModule {}
