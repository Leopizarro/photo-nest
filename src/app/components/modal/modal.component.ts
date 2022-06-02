import { Component, Input, HostListener } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IModal } from 'src/app/common/interfaces/modal.interface';
import { IPhotoCard } from 'src/app/common/interfaces/photocard.interface';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() photoClickedData: IPhotoCard;
  public windowWidth: number;

  constructor(private modal: ModalController) {
    this.photoClickedData = null;
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.setWidth();
    }

  public setWidth() {
    this.windowWidth = window.innerWidth;
  }

  public dismissModal() {
    this.modal.dismiss();
  }
}
