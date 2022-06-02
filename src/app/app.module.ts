import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './components/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { GalleryModalComponent } from './components/gallery-modal/gallery-modal.component';
import { ButtonModule } from './components/button/button.module';
import { SliderNavigationModule } from './components/slider-navigation/slider-navigation.module';
import { FooterModule } from './components/footer/footer.module';
import { InfoBoxModule } from './components/info-box/info-box.module';

@NgModule({
  declarations: [AppComponent, GalleryModalComponent],
  entryComponents: [],
  imports:
  [
  BrowserModule,
  CommonModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  HeaderModule,
  ButtonModule,
  InfoBoxModule,
  SliderNavigationModule,
  ReactiveFormsModule,
  FooterModule,
  AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
