import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IPhotoCard } from 'src/app/common/interfaces/photocard.interface';
import { IGalleryModal, IModal } from '../../common/interfaces/modal.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    private modalController: ModalController,
  ) { }

  public async presentModal(component, modalData: IPhotoCard) {
    const modal = await this.modalController.create({
      component,
      componentProps: {
        photoClickedData: modalData,
      },
      cssClass: 'auto-height'
    });
    if (modal) { await modal.present(); }
    return modal;
  }

  public async presentGalleryModal(component, photoClicked: IPhotoCard, galleryInfo: IPhotoCard[], route: string) {
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
    return modal;
  }

  public dismiss() {
    this.modalController.dismiss();
  }
}
