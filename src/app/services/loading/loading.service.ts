import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(public loadingController: LoadingController) { }

  public async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando imágenes...'
    });
    await loading.present();
  }

  public dismissLoading() {
    this.loadingController.dismiss();
  }

  public async present2sLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando imagen HQ...',
      duration: 1500
    });
    await loading.present();
  }
}
