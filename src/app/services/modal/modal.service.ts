import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IPhotoCard } from 'src/app/common/interfaces/photocard.interface';
import { IGalleryModal, IModal } from '../../common/interfaces/modal.interface';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    private modalController: ModalController,
    private loadingService: LoadingService
  ) { }

  public async presentModal(component, modalData: IPhotoCard) {
    this.loadingService.presentLoading();
    const modal = await this.modalController.create({
      component,
      componentProps: {
        photoClickedData: modalData,
      },
      cssClass: 'auto-height'
    });
    if (modal) { await modal.present(); }
    this.loadingService.dismissLoading();
    return modal;
  }

  public async presentGalleryModal(component, photoClicked: IPhotoCard, galleryInfo: IPhotoCard[], route: string) {
    this.loadingService.presentLoading();
    const modal = await this.modalController.create({
      component,
      componentProps: {
        photoCollection: galleryInfo,
        clickedPhotoInfo: photoClicked,
        currentRoute: route
      },
      cssClass: 'auto-height'
    });
    if (modal) { await modal.present(); }
    this.loadingService.dismissLoading();
    return modal;
  }

  public dismiss() {
    this.modalController.dismiss();
  }
}
